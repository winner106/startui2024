import React from 'react';

import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { ErrorPage } from '@/components/ErrorPage';
import { LoaderFull } from '@/components/LoaderFull';
import { AppLayoutPage } from '@/features/app/AppLayoutPage';
import { trpc } from '@/lib/trpc/client';

export default function PageProducts() {
  const { t } = useTranslation(['products']);

  const products = trpc.products.getAll.useInfiniteQuery(
    {},
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <AppLayoutPage>
      <Stack flex={1} spacing={4}>
        <Heading size="md">{t('products:list.title')}</Heading>

        {products.isLoading && <LoaderFull />}
        {products.isError && <ErrorPage />}

        {products.isSuccess &&
          !products.data.pages.flatMap((p) => p.items).length && (
            <Text fontSize="sm" color="text-dimmed">
              {t('products:list.empty')}
            </Text>
          )}

        {products.isSuccess &&
          products.data.pages
            .flatMap((p) => p.items)
            .map((product) => (
              <Card as={LinkBox} key={product.id} shadow="card">
                <CardBody>
                  <Stack>
                    <Heading size="sm">{product.name}</Heading>
                    {!!product.description && (
                      <Text fontSize="sm">{product.description}</Text>
                    )}
                    <Link
                      as={LinkOverlay}
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize="sm"
                    >
                      {product.link}
                    </Link>
                  </Stack>
                </CardBody>
              </Card>
            ))}
        {products.hasNextPage && (
          <Box>
            <Button
              onClick={() => products.fetchNextPage()}
              isLoading={products.isFetchingNextPage}
            >
              {t('products:list.loadMore.button')}
            </Button>
          </Box>
        )}
      </Stack>
    </AppLayoutPage>
  );
}
