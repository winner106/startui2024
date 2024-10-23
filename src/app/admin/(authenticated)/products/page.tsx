'use client';

import { Suspense } from 'react';

import PageAdminRepositories from '@/features/products/PageAdminRepositories';

export default function Page() {
  return (
    <Suspense>
      <PageAdminRepositories />
    </Suspense>
  );
}
