import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { zProduct } from '@/features/products/schemas';
import { ExtendedTRPCError } from '@/server/config/errors';
import { createTRPCRouter, protectedProcedure } from '@/server/config/trpc';

export const repositoriesRouter = createTRPCRouter({
  getById: protectedProcedure({ authorizations: ['APP', 'ADMIN'] })
    .meta({
      openapi: {
        method: 'GET',
        path: '/products/{id}',
        protect: true,
        tags: ['products'],
      },
    })
    .input(zProduct().pick({ id: true }))
    .output(zProduct())
    .query(async ({ ctx, input }) => {
      ctx.logger.info('Getting product');
      const product = await ctx.db.product.findUnique({
        where: { id: input.id },
      });

      if (!product) {
        ctx.logger.warn('Unable to find product with the provided input');
        throw new TRPCError({
          code: 'NOT_FOUND',
        });
      }

      return product;
    }),

  getAll: protectedProcedure({ authorizations: ['APP', 'ADMIN'] })
    .meta({
      openapi: {
        method: 'GET',
        path: '/products',
        protect: true,
        tags: ['products'],
      },
    })
    .input(
      z
        .object({
          cursor: z.string().cuid().optional(),
          limit: z.number().min(1).max(100).default(20),
          searchTerm: z.string().optional(),
        })
        .default({})
    )
    .output(
      z.object({
        items: z.array(zProduct()),
        nextCursor: z.string().cuid().optional(),
        total: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      ctx.logger.info('Getting products from database');

      const where = {
        name: {
          contains: input.searchTerm,
          mode: 'insensitive',
        },
      } satisfies Prisma.ProductWhereInput;

      const [total, items] = await ctx.db.$transaction([
        ctx.db.product.count({
          where,
        }),
        ctx.db.product.findMany({
          // Get an extra item at the end which we'll use as next cursor
          take: input.limit + 1,
          cursor: input.cursor ? { id: input.cursor } : undefined,
          orderBy: {
            name: 'asc',
          },
          where,
        }),
      ]);

      let nextCursor: typeof input.cursor | undefined = undefined;
      if (items.length > input.limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }

      return {
        items,
        nextCursor,
        total,
      };
    }),

  create: protectedProcedure({ authorizations: ['ADMIN'] })
    .meta({
      openapi: {
        method: 'POST',
        path: '/products',
        protect: true,
        tags: ['products'],
      },
    })
    .input(
      zProduct().pick({
        name: true,
        link: true,
        description: true,
      })
    )
    .output(zProduct())
    .mutation(async ({ ctx, input }) => {
      try {
        ctx.logger.info('Creating product');
        return await ctx.db.product.create({
          data: input,
        });
      } catch (e) {
        throw new ExtendedTRPCError({
          cause: e,
        });
      }
    }),

  updateById: protectedProcedure({ authorizations: ['ADMIN'] })
    .meta({
      openapi: {
        method: 'PUT',
        path: '/products/{id}',
        protect: true,
        tags: ['products'],
      },
    })
    .input(
      zProduct().pick({
        id: true,
        name: true,
        link: true,
        description: true,
      })
    )
    .output(zProduct())
    .mutation(async ({ ctx, input }) => {
      try {
        ctx.logger.info('Updating product');
        return await ctx.db.product.update({
          where: { id: input.id },
          data: input,
        });
      } catch (e) {
        throw new ExtendedTRPCError({
          cause: e,
        });
      }
    }),

  removeById: protectedProcedure({ authorizations: ['ADMIN'] })
    .meta({
      openapi: {
        method: 'DELETE',
        path: '/products/{id}',
        protect: true,
        tags: ['products'],
      },
    })
    .input(zProduct().pick({ id: true }))
    .output(zProduct())
    .mutation(async ({ ctx, input }) => {
      ctx.logger.info({ input }, 'Removing product');
      try {
        return await ctx.db.product.delete({
          where: { id: input.id },
        });
      } catch (e) {
        throw new ExtendedTRPCError({
          cause: e,
        });
      }
    }),
});
