'use client';

import { Suspense } from 'react';

import PageAdminProduct from '@/features/products/PageAdminProduct';

export default function Page() {
  return (
    <Suspense>
      <PageAdminProduct />
    </Suspense>
  );
}
