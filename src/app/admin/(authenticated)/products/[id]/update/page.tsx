'use client';

import { Suspense } from 'react';

import PageAdminRepositoryUpdate from '@/features/products/PageAdminRepositoryUpdate';

export default function Page() {
  return (
    <Suspense>
      <PageAdminRepositoryUpdate />
    </Suspense>
  );
}
