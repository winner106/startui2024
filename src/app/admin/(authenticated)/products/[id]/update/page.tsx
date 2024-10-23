'use client';

import { Suspense } from 'react';

import PageAdminProductUpdate from '@/features/products/PageAdminProductUpdate';

export default function Page() {
  return (
    <Suspense>
      <PageAdminProductUpdate />
    </Suspense>
  );
}
