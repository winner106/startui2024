import { ROUTES_ADMIN } from '@/features/admin/routes';
import { ROUTES_APP } from '@/features/app/routes';

export const ROUTES_PRODUCTS = {
  app: {
    root: () => `${ROUTES_APP.baseUrl()}/products`,
  },
  admin: {
    root: () => `${ROUTES_ADMIN.baseUrl()}/products`,
    create: () => `${ROUTES_PRODUCTS.admin.root()}/create`,
    product: (params: { id: string }) =>
      `${ROUTES_PRODUCTS.admin.root()}/${params.id}`,
    update: (params: { id: string }) =>
      `${ROUTES_PRODUCTS.admin.root()}/${params.id}/update`,
  },
} as const;
