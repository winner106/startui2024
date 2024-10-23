import React from 'react';

import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuProps,
  Portal,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { LuEye, LuPenLine, LuTrash2 } from 'react-icons/lu';

import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmModal } from '@/components/ConfirmModal';
import { Icon } from '@/components/Icons';
import { toastCustom } from '@/components/Toast';
import { ROUTES_REPOSITORIES } from '@/features/products/routes';
import { trpc } from '@/lib/trpc/client';
import type { RouterOutputs } from '@/lib/trpc/types';

export type RepositoryActionProps = Omit<MenuProps, 'children'> & {
  product: RouterOutputs['products']['getAll']['items'][number];
};

export const AdminRepositoryActions = ({
  product,
  ...rest
}: RepositoryActionProps) => {
  const { t } = useTranslation(['common', 'products']);
  const trpcUtils = trpc.useUtils();

  const repositoryRemove = trpc.products.removeById.useMutation({
    onSuccess: async () => {
      await trpcUtils.products.getAll.invalidate();
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
    <Menu placement="left-start" {...rest}>
      <MenuButton as={ActionsButton} isLoading={repositoryRemove.isLoading} />
      <Portal>
        <MenuList>
          <MenuItem
            as={Link}
            href={ROUTES_REPOSITORIES.admin.product({ id: product.id })}
            icon={<Icon icon={LuEye} fontSize="lg" color="gray.400" />}
          >
            {t('products:list.actions.view')}
          </MenuItem>
          <MenuItem
            as={Link}
            href={ROUTES_REPOSITORIES.admin.update({ id: product.id })}
            icon={<Icon icon={LuPenLine} fontSize="lg" color="gray.400" />}
          >
            {t('common:actions.edit')}
          </MenuItem>
          <MenuDivider />
          <ConfirmModal
            title={t('products:deleteModal.title')}
            message={t('products:deleteModal.message', {
              name: product.name,
            })}
            onConfirm={() => repositoryRemove.mutate({ id: product.id })}
            confirmText={t('common:actions.delete')}
            confirmVariant="@dangerSecondary"
          >
            <MenuItem
              icon={<Icon icon={LuTrash2} fontSize="lg" color="gray.400" />}
            >
              {t('common:actions.delete')}
            </MenuItem>
          </ConfirmModal>
        </MenuList>
      </Portal>
    </Menu>
  );
};
