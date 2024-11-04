import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { env } from '@/env.mjs';
import { createTRPCRouter, publicProcedure } from '@/server/config/trpc';

const weatherForecastRequestSchema = z.object({
  key: z.string(),
  cityIds: z.array(z.string()).nonempty(), // 支持多个 cityId
});

const weatherForecastResponseSchema = z.object({
  data: z.array(z.any()),
  usage: z.object({
    todayRequests: z.number(),
    usedRequests: z.number(),
    dailyLimit: z.number(),
    totalRequests: z.number(),
  }),
});

export const weatherRouter = createTRPCRouter({
  test: publicProcedure()
    .input(
      z.object({
        isok: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      return {
        isok: true,
      };
    }),
  forecast: publicProcedure()
    .meta({
      openapi: {
        method: 'POST',
        path: '/weather',
        tags: ['weather'],
      },
    })
    .input(weatherForecastRequestSchema)
    .output(weatherForecastResponseSchema)
    .mutation(async ({ ctx, input }) => {
      const { key, cityIds } = input;
      const uniqueCityIds = Array.from(new Set(cityIds));

      const userIp = ctx.req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
      const userAgent = ctx.req.headers.get('user-agent') || 'unknown'; // 获取客户端信息

      // 1. 获取 API Key 的相关数据
      const apiKey = await ctx.db.apiKey.findUnique({
        where: { key },
        include: {
          user: true,
          package: true,
        },
      });

      // 2. 检查 API Key 的有效性
      if (!apiKey || apiKey.status !== 'ENABLED') {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Invalid or disabled API key',
        });
      }

      const user = apiKey.user;

      // 检查用户的账户状态
      if (user.accountStatus !== 'ENABLED') {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'User account is not enabled',
        });
      }

      const { dailyLimit, durationDays } = apiKey.package;

      // 检查 API Key 是否过期
      const expirationDate = new Date(apiKey.createdAt);
      expirationDate.setDate(expirationDate.getDate() + durationDays);
      if (new Date() > expirationDate) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'API key has expired',
        });
      }

      // 3. 检查请求次数的限制
      const isSameDay = apiKey.lastRequestDate
        ? new Date(apiKey.lastRequestDate).toDateString() === new Date().toDateString()
        : false;

      // 日请求次数限制
      if (isSameDay && apiKey.todayRequests >= dailyLimit) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Daily request limit exceeded',
        });
      }

      const totalRequests = apiKey.package.totalRequests;
      // 总请求次数限制
      if (apiKey.usedRequests >= totalRequests) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Total request limit exceeded',
        });
      }

      // 4. 计算可用的 cityId，因为请求次数可能只够一部分 cityId 请求
      const validCityIds: string[] = [];
      let validRequestCount = 0;

      for (const cityId of uniqueCityIds) {
        if (
          validRequestCount + apiKey.todayRequests < apiKey.package.dailyLimit &&
          validRequestCount + apiKey.usedRequests < totalRequests
        ) {
          validCityIds.push(cityId);
          validRequestCount++;
        }
      }

      if (validRequestCount === 0) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'No valid city IDs available for request',
        });
      }

      // 5. 向第三方 API 请求天气数据
      const weatherResults = await Promise.all(
        validCityIds.map(async (cityId) => {
          const response = await fetch(
            `http://v1.yiketianqi.com/free/month?appid=${env.WEATHER_APPID}&appsecret=${env.WEATHER_APPSECRET}&cityid=${cityId}&unescape=1`
          );
          return await response.json();
        })
      );

      // 6. 更新 API Key 的使用情况
      const updateResult = await ctx.db.apiKey.update({
        where: { id: apiKey.id },
        data: {
          todayRequests: isSameDay ? { increment: validRequestCount } : validRequestCount, // 今天请求次数加 validRequestCount，或者重置为 validRequestCount
          usedRequests: { increment: validRequestCount },
          lastRequestDate: new Date(), // 更新最后一次请求时间
        },
      });

      // 7. 保存请求记录到 ApiUsage
      await ctx.db.apiUsage.create({
        data: {
          apiKeyId: apiKey.id,
          endpointId: apiKey.endpointId, // 替换为实际的 endpoint ID
          requestDate: new Date(),
          userIp,
          userAgent,
          requestCount: validRequestCount,
          description: weatherResults.map((r) => r.city).join(','),
        },
      });

      return {
        data: weatherResults,
        usage: {
          todayRequests: updateResult.todayRequests,
          usedRequests: updateResult.usedRequests,
          dailyLimit,
          totalRequests,
        },
      };
    }),
});
