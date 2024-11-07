import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { env } from '@/env.mjs';
import { AppContext, createTRPCRouter, publicProcedure } from '@/server/config/trpc';

const forecastRequestSchema = z.object({
  key: z.string(),
  cityIds: z.array(z.string()).nonempty(), // 支持多个 cityId
});

const historyRequestSchema = z
  .object({
    key: z.string(),
    cityIds: z.array(z.string()).nonempty(), // 支持多个 cityId
    startDate: z
      .string()
      .date()
      .refine((data) => new Date(data) < new Date(), { message: 'Start date must be in the past' }),
    endDate: z.string().date(),
  })
  .refine((data) => data.startDate <= data.endDate, {
    message: 'startDate must be before or equal to endDate',
    path: ['startDate'],
  });

const responseSchema = z.object({
  data: z.array(z.any()),
  errors: z.array(z.any()),
  usage: z.object({
    todayRequests: z.number(),
    usedRequests: z.number(),
    dailyLimit: z.number(),
    totalRequests: z.number(),
  }),
});

const historyHandler = async ({
  ctx,
  input,
}: {
  ctx: AppContext;
  input: z.infer<typeof historyRequestSchema>;
}): Promise<z.infer<typeof responseSchema>> => {
  const { key, cityIds, startDate, endDate } = input;

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
  // 获取年份和月份的数组
  const yearMonthPairs = getYearMonthPairs(startDate, endDate);
  const allResults: TODO = [];
  const errorRecords: TODO = [];
  for await (const cityId of validCityIds) {
    const cityResults = [];

    // 内层循环遍历 yearMonthPairs，确保顺序执行
    for (const { year, month } of yearMonthPairs) {
      try {
        // 向第三方 API 发请求并等待响应
        const response = await fetch(
          `http://v1.yiketianqi.com/free/history?appid=${env.WEATHER_APPID}&appsecret=${env.WEATHER_APPSECRET}&cityid=${cityId}&year=${year}&month=${month}`
        );
        const json = await response.json();
        // 如果请求成功，就暂存起来
        cityResults.push(json);
      } catch (error) {
        // 如果出错，记录错误信息
        errorRecords.push({
          cityId,
          year,
          month,
          error: error || 'Unknown error',
        });
      }
    }

    // 将当前城市的所有结果推入 allResults 数组中
    allResults.push({
      cityId,
      results: cityResults,
    });
  }

  // 6. 更新 API Key 的使用情况
  const todayRequests = validRequestCount * yearMonthPairs.length;
  const updateResult = await ctx.db.apiKey.update({
    where: { id: apiKey.id },
    data: {
      todayRequests: isSameDay ? { increment: todayRequests } : todayRequests, // 今天请求次数加 validRequestCount，或者重置为 validRequestCount
      usedRequests: { increment: todayRequests },
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
      description: `${startDate} to ${endDate}: ${validCityIds.join(',')}`,
    },
  });

  return {
    data: allResults,
    errors: errorRecords, // 错误记录
    usage: {
      todayRequests: updateResult.todayRequests,
      usedRequests: updateResult.usedRequests,
      dailyLimit,
      totalRequests,
    },
  };
};

const forecastHandler = async ({
  ctx,
  input,
}: {
  ctx: AppContext;
  input: z.infer<typeof forecastRequestSchema>;
}): Promise<z.infer<typeof responseSchema>> => {
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
  const errorRecords: { cityId: string; error: string }[] = [];

  const weatherResults = await Promise.all(
    validCityIds.map(async (cityId) => {
      try {
        const response = await fetch(
          `http://v1.yiketianqi.com/free/month?appid=${env.WEATHER_APPID}&appsecret=${env.WEATHER_APPSECRET}&cityid=${cityId}&unescape=1`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch weather data for cityId: ${cityId}`);
        }

        return await response.json();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        // 记录错误
        errorRecords.push({ cityId, error: errorMessage });

        // 返回 null 或其他表示错误的值
        return null;
      }
    })
  );

  // 过滤出成功的结果
  const successfulResults = weatherResults.filter((result) => result !== null);

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
    data: successfulResults,
    errors: errorRecords,
    usage: {
      todayRequests: updateResult.todayRequests,
      usedRequests: updateResult.usedRequests,
      dailyLimit,
      totalRequests,
    },
  };
};

function getYearMonthPairs(startDate: string, endDate: string) {
  const yearMonthPairs: { year: number; month: number }[] = [];

  // 将字符串转换为 Date 对象
  const start = new Date(startDate);
  let end = new Date(endDate);
  const today = new Date();
  if (end > today) end = today; // 如果 endDate 大于今天，则将 endDate 设置为今天

  const current = new Date(start.getFullYear(), start.getMonth(), 1); // 从 startDate 的第一个月开始
  const last = new Date(end.getFullYear(), end.getMonth(), 1); // 结束于 endDate 的月份

  // 遍历 startDate 到 endDate 之间的每一个月份
  while (current <= last) {
    yearMonthPairs.push({ year: current.getFullYear(), month: current.getMonth() + 1 }); // 月份是从 0 开始的，所以 +1
    current.setMonth(current.getMonth() + 1); // 前进到下一个月
  }

  return yearMonthPairs;
}

export const weatherRouter = createTRPCRouter({
  history: publicProcedure()
    .meta({
      openapi: {
        method: 'POST',
        path: '/weather/history',
        tags: ['weather'],
      },
    })
    .input(historyRequestSchema)
    .output(responseSchema)
    .mutation(historyHandler),
  forecast: publicProcedure()
    .meta({
      openapi: {
        method: 'POST',
        path: '/weather/forecast',
        tags: ['weather'],
      },
    })
    .input(forecastRequestSchema)
    .output(responseSchema)
    .mutation(forecastHandler),
});
