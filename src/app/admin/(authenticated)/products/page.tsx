'use client';

import { Suspense } from 'react';

import PageAdminProducts from '@/features/products/PageAdminProducts';

export default function Page() {
  return (
    <Suspense>
      <PageAdminProducts />
    </Suspense>
  );
}
