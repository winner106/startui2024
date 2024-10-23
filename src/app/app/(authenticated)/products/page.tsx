'use client';

import { Suspense } from 'react';

import PageRepositories from '@/features/products/PageRepositories';

export default function Page() {
  return (
    <Suspense>
      <PageRepositories />
    </Suspense>
  );
}
