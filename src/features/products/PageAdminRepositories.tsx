import React from 'react';

import {
  Button,
  Flex,
  HStack,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { Trans, useTranslation } from 'react-i18next';
import { LuBookMarked, LuPlus } from 'react-icons/lu';

import {
  DataList,
  DataListCell,
  DataListEmptyState,
  DataListErrorState,
  DataListLoadingState,
  DataListRow,
  DataListText,
} from '@/components/DataList';
import { Icon } from '@/components/Icons';
import { ResponsiveIconButton } from '@/components/ResponsiveIconButton';
import { SearchInput } from '@/components/SearchInput';
import {
  AdminLayoutPage,
  AdminLayoutPageContent,
} from '@/features/admin/AdminLayoutPage';
import { AdminRepositoryActions } from '@/features/products/AdminRepositoryActions';
import { ROUTES_REPOSITORIES } from '@/features/products/routes';
import { trpc } from '@/lib/trpc/client';

export default function PageAdminRepositories() {
  const { t } = useTranslation(['products']);
  const [searchTerm, setSearchTerm] = useQueryState('s', { defaultValue: '' });

  const products = trpc.products.getAll.useInfiniteQuery(
    { searchTerm },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <AdminLayoutPage>
      <AdminLayoutPageContent>
        <Stack spacing={4}>
          <HStack spacing={4} alignItems={{ base: 'end', md: 'center' }}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              rowGap={2}
              columnGap={4}
              alignItems={{ base: 'start', md: 'center' }}
              flex={1}
            >
              <Heading flex="none" size="md">
                {t('products:list.title')}
              </Heading>
              <SearchInput
                value={searchTerm}
                size="sm"
                onChange={(value) => setSearchTerm(value || null)}
                maxW={{ base: 'none', md: '20rem' }}
              />
            </Flex>
            <ResponsiveIconButton
              as={Link}
              href={ROUTES_REPOSITORIES.admin.create()}
              variant="@primary"
              size="sm"
              icon={<LuPlus />}
            >
              {t('products:list.actions.createRepository')}
            </ResponsiveIconButton>
          </HStack>

          <DataList>
            {products.isLoading && <DataListLoadingState />}
            {products.isError && (
              <DataListErrorState
                title={t('products:feedbacks.loadingRepositoryError.title')}
                retry={() => products.refetch()}
              />
            )}
            {products.isSuccess &&
              !products.data.pages.flatMap((p) => p.items).length && (
                <DataListEmptyState searchTerm={searchTerm}>
                  {t('products:list.empty')}
                </DataListEmptyState>
              )}

            {products.data?.pages
              .flatMap((p) => p.items)
              .map((product) => (
                <DataListRow as={LinkBox} key={product.id} withHover>
                  <DataListCell w="auto">
                    <Icon icon={LuBookMarked} fontSize="xl" color="gray.400" />
                  </DataListCell>
                  <DataListCell>
                    <DataListText fontWeight="bold">
                      <LinkOverlay
                        as={Link}
                        href={ROUTES_REPOSITORIES.admin.product({
                          id: product.id,
                        })}
                      >
                        {product.name}
                      </LinkOverlay>
                    </DataListText>
                    <DataListText color="text-dimmed">
                      {product.link}
                    </DataListText>
                  </DataListCell>
                  <DataListCell flex={2} display={{ base: 'none', md: 'flex' }}>
                    <DataListText noOfLines={2} color="text-dimmed">
                      {product.description}
                    </DataListText>
                  </DataListCell>
                  <DataListCell w="auto">
                    <AdminRepositoryActions product={product} />
                  </DataListCell>
                </DataListRow>
              ))}
            {products.isSuccess && (
              <DataListRow mt="auto">
                <DataListCell w="auto">
                  <Button
                    size="sm"
                    onClick={() => products.fetchNextPage()}
                    isLoading={products.isFetchingNextPage}
                    isDisabled={!products.hasNextPage}
                  >
                    {t('products:list.loadMore.button')}
                  </Button>
                </DataListCell>
                <DataListCell>
                  {products.isSuccess && !!products.data.pages[0]?.total && (
                    <Text fontSize="xs" color="text-dimmed">
                      <Trans
                        i18nKey="products:list.loadMore.display"
                        t={t}
                        values={{
                          loaded: products.data.pages.flatMap((p) => p.items)
                            .length,
                          total: products.data.pages[0].total,
                        }}
                      />
                    </Text>
                  )}
                </DataListCell>
              </DataListRow>
            )}
          </DataList>
        </Stack>
      </AdminLayoutPageContent>
    </AdminLayoutPage>
  );
}
