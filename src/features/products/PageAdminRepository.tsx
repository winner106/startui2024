import React from 'react';

import {
  Box,
  Card,
  CardBody,
  Heading,
  IconButton,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { LuExternalLink, LuPenLine, LuTrash2 } from 'react-icons/lu';

import { ConfirmModal } from '@/components/ConfirmModal';
import { ErrorPage } from '@/components/ErrorPage';
import { Icon } from '@/components/Icons';
import { LoaderFull } from '@/components/LoaderFull';
import { ResponsiveIconButton } from '@/components/ResponsiveIconButton';
import { toastCustom } from '@/components/Toast';
import { AdminBackButton } from '@/features/admin/AdminBackButton';
import {
  AdminLayoutPage,
  AdminLayoutPageContent,
  AdminLayoutPageTopBar,
} from '@/features/admin/AdminLayoutPage';
import { ROUTES_REPOSITORIES } from '@/features/products/routes';
import { trpc } from '@/lib/trpc/client';

export default function PageAdminRepository() {
  const { t } = useTranslation(['common', 'products']);

  const trpcUtils = trpc.useUtils();

  const router = useRouter();
  const params = useParams();
  const product = trpc.products.getById.useQuery({
    id: params?.id?.toString() ?? '',
  });

  const repositoryRemove = trpc.products.removeById.useMutation({
    onSuccess: async () => {
      await trpcUtils.products.getAll.invalidate();
      router.replace(ROUTES_REPOSITORIES.admin.root());
    },
    onError: () => {
      toastCustom({
        status: 'error',
        title: t('products:feedbacks.deleteRepositoryError.title'),
        description: t('products:feedbacks.deleteRepositoryError.description'),
      });
    },
  });

  return (
    <AdminLayoutPage showNavBar="desktop" containerMaxWidth="container.md">
      <AdminLayoutPageTopBar
        leftActions={<AdminBackButton />}
        rightActions={
          <>
            <ResponsiveIconButton
              as={Link}
              href={ROUTES_REPOSITORIES.admin.update({
                id: params?.id?.toString() ?? 'unknown',
              })}
              isDisabled={!params?.id}
              icon={<LuPenLine />}
            >
              {t('common:actions.edit')}
            </ResponsiveIconButton>

            <ConfirmModal
              title={t('products:deleteModal.title')}
              message={t('products:deleteModal.message', {
                name: product.data?.name,
              })}
              onConfirm={() =>
                product.data &&
                repositoryRemove.mutate({
                  id: product.data.id,
                })
              }
              confirmText={t('common:actions.delete')}
              confirmVariant="@dangerSecondary"
            >
              <IconButton
                aria-label={t('common:actions.delete')}
                icon={<LuTrash2 />}
                isDisabled={!product.data}
                isLoading={repositoryRemove.isLoading}
              />
            </ConfirmModal>
          </>
        }
      >
        {product.isLoading && <SkeletonText maxW="6rem" noOfLines={2} />}
        {product.isSuccess && <Heading size="sm">{product.data?.name}</Heading>}
      </AdminLayoutPageTopBar>
      <AdminLayoutPageContent>
        {product.isLoading && <LoaderFull />}
        {product.isError && <ErrorPage />}
        {product.isSuccess && (
          <Card>
            <CardBody>
              <Stack spacing={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="bold">
                    {t('products:data.name.label')}
                  </Text>
                  <Text>{product.data?.name}</Text>
                </Box>
                <Box
                  role="group"
                  as="a"
                  href={product.data?.link}
                  target="_blank"
                >
                  <Text fontSize="sm" fontWeight="bold">
                    {t('products:data.link.label')}
                    <Icon marginLeft={1} icon={LuExternalLink} />
                  </Text>

                  <Text _groupHover={{ textDecoration: 'underline' }}>
                    {product.data?.link}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="bold">
                    {t('products:data.description.label')}
                  </Text>
                  <Text>{product.data?.description || <small>-</small>}</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        )}
      </AdminLayoutPageContent>
    </AdminLayoutPage>
  );
}
