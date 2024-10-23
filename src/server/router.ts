import { createTRPCRouter } from '@/server/config/trpc';
import { accountRouter } from '@/server/routers/account';
import { authRouter } from '@/server/routers/auth';
import { oauthRouter } from '@/server/routers/oauth';
import { productsRouter } from '@/server/routers/products';
import { usersRouter } from '@/server/routers/users';

/**
 * This is the primary router for your server.
 *
 * All routers added in /src/server/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  account: accountRouter,
  auth: authRouter,
  oauth: oauthRouter,
  products: productsRouter,
  users: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
