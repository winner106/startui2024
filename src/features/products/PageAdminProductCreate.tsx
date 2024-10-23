import React from 'react';

import { Button, Heading } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Form } from '@/components/Form';
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

export default function PageAdminProductCreate() {
  const { t } = useTranslation(['common', 'products']);
  const trpcUtils = trpc.useUtils();
  const router = useRouter();

  const createProduct = trpc.products.create.useMutation({
    onSuccess: async () => {
      await trpcUtils.products.getAll.invalidate();
      toastCustom({
        status: 'success',
        title: t('products:create.feedbacks.updateSuccess.title'),
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
        title: t('products:create.feedbacks.updateError.title'),
      });
    },
  });

  const form = useForm<FormFieldsProduct>({
    resolver: zodResolver(zFormFieldsProduct()),
    defaultValues: {
      name: '',
      link: '',
      description: '',
    },
  });

  return (
    <Form
      {...form}
      onSubmit={(values) => {
        createProduct.mutate(values);
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
                isLoading={createProduct.isLoading || createProduct.isSuccess}
              >
                {t('products:create.action.save')}
              </Button>
            </>
          }
        >
          <Heading size="sm">{t('products:create.title')}</Heading>
        </AdminLayoutPageTopBar>
        <AdminLayoutPageContent>
          <ProductForm />
        </AdminLayoutPageContent>
      </AdminLayoutPage>
    </Form>
  );
}
