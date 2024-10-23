import React from 'react';

import { Button, Heading, SkeletonText, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorPage } from '@/components/ErrorPage';
import { Form } from '@/components/Form';
import { LoaderFull } from '@/components/LoaderFull';
import { toastCustom } from '@/components/Toast';
import { AdminBackButton } from '@/features/admin/AdminBackButton';
import { AdminCancelButton } from '@/features/admin/AdminCancelButton';
import {
  AdminLayoutPage,
  AdminLayoutPageContent,
  AdminLayoutPageTopBar,
} from '@/features/admin/AdminLayoutPage';
import { ProductForm } from '@/features/products/ProductForm';
import {
  FormFieldsProduct,
  zFormFieldsProduct,
} from '@/features/products/schemas';
import { trpc } from '@/lib/trpc/client';
import { isErrorDatabaseConflict } from '@/lib/trpc/errors';

export default function PageAdminProductUpdate() {
  const { t } = useTranslation(['common', 'products']);
  const trpcUtils = trpc.useUtils();

  const params = useParams();
  const router = useRouter();
  const product = trpc.products.getById.useQuery(
    {
      id: params?.id?.toString() ?? '',
    },
    {
      staleTime: Infinity,
    }
  );

  const isReady = !product.isFetching;

  const updateProduct = trpc.products.updateById.useMutation({
    onSuccess: async () => {
      await trpcUtils.products.invalidate();
      toastCustom({
        status: 'success',
        title: t('products:update.feedbacks.updateSuccess.title'),
      });
      router.back();
    },
    onError: (error) => {
      if (isErrorDatabaseConflict(error, 'name')) {
        form.setError('name', {
          message: t('products:data.name.alreadyUsed'),
        });
        return;
      }
      toastCustom({
        status: 'error',
        title: t('products:update.feedbacks.updateError.title'),
      });
    },
  });

  const form = useForm<FormFieldsProduct>({
    resolver: zodResolver(zFormFieldsProduct()),
    values: {
      name: product.data?.name ?? '',
      link: product.data?.link ?? '',
      description: product.data?.description ?? null,
    },
  });

  return (
    <Form
      {...form}
      onSubmit={(values) => {
        if (!product.data?.id) return;
        updateProduct.mutate({
          id: product.data.id,
          ...values,
        });
      }}
    >
      <AdminLayoutPage containerMaxWidth="container.md" showNavBar={false}>
        <AdminLayoutPageTopBar
          leftActions={<AdminBackButton withConfirm={form.formState.isDirty} />}
          rightActions={
            <>
              <AdminCancelButton withConfirm={form.formState.isDirty} />
              <Button
                type="submit"
                variant="@primary"
                isLoading={updateProduct.isLoading || updateProduct.isSuccess}
              >
                {t('products:update.action.save')}
              </Button>
            </>
          }
        >
          <Stack flex={1} spacing={0}>
            {product.isLoading && <SkeletonText maxW="6rem" noOfLines={2} />}
            {product.isSuccess && (
              <Heading size="sm">{product.data?.name}</Heading>
            )}
          </Stack>
        </AdminLayoutPageTopBar>
        {!isReady && <LoaderFull />}
        {isReady && product.isError && <ErrorPage />}
        {isReady && product.isSuccess && (
          <AdminLayoutPageContent>
            <ProductForm />
          </AdminLayoutPageContent>
        )}
      </AdminLayoutPage>
    </Form>
  );
}
