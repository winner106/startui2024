'use client';

import { Suspense } from 'react';

import PageAdminRepository from '@/features/products/PageAdminRepository';

export default function Page() {
  return (
    <Suspense>
      <PageAdminRepository />
    </Suspense>
  );
}
