'use client';

import { Suspense } from 'react';

import PageProducts from '@/features/products/PageProducts';

export default function Page() {
  return (
    <Suspense>
      <PageProducts />
    </Suspense>
  );
}
