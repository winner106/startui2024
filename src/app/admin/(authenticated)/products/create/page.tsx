'use client';

import { Suspense } from 'react';

import PageAdminProductCreate from '@/features/products/PageAdminProductCreate';

export default function Page() {
  return (
    <Suspense>
      <PageAdminProductCreate />
    </Suspense>
  );
}
