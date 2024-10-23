'use client';

import { Suspense } from 'react';

import PageAdminRepositoryCreate from '@/features/products/PageAdminRepositoryCreate';

export default function Page() {
  return (
    <Suspense>
      <PageAdminRepositoryCreate />
    </Suspense>
  );
}
