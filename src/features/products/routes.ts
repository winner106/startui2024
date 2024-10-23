import { ROUTES_ADMIN } from '@/features/admin/routes';
import { ROUTES_APP } from '@/features/app/routes';

export const ROUTES_REPOSITORIES = {
  app: {
    root: () => `${ROUTES_APP.baseUrl()}/products`,
  },
  admin: {
    root: () => `${ROUTES_ADMIN.baseUrl()}/products`,
    create: () => `${ROUTES_REPOSITORIES.admin.root()}/create`,
    product: (params: { id: string }) =>
      `${ROUTES_REPOSITORIES.admin.root()}/${params.id}`,
    update: (params: { id: string }) =>
      `${ROUTES_REPOSITORIES.admin.root()}/${params.id}/update`,
  },
} as const;
