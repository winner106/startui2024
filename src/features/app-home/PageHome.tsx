import React from 'react';

import {
  Alert,
  AlertTitle,
  Button,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import { LuArrowRight, LuDatabase, LuNetwork, LuTable } from 'react-icons/lu';

import { Icon } from '@/components/Icons';
import { Logo } from '@/components/Logo';
import { ROUTES_ADMIN } from '@/features/admin/routes';
import { AppLayoutPage } from '@/features/app/AppLayoutPage';
import { MarketingBento } from '@/features/demo-mode/MarketingBento';
import { trpc } from '@/lib/trpc/client';

export default function PageHome() {
  const account = trpc.account.get.useQuery();
  const { t } = useTranslation(['appHome', 'account']);

  return (
    <AppLayoutPage>
      <Stack flex={1} spacing={6}>
        <Flex
          display={{ base: 'flex', md: 'none' }}
          py={2}
          alignItems="center"
          justifyContent="center"
        >
          <Logo />
        </Flex>

        <Stack>
          <Heading fontSize="lg">{t('appHome:welcome.title')}</Heading>
          <Text display="block">
            {t('appHome:welcome.description')}
            <br />
            <Text as="a" href="https://excel520.taobao.com" target="_blank">
              <Trans t={t} i18nKey="appHome:welcome.author" />
            </Text>
          </Text>
        </Stack>

        <Wrap spacing="2">
          <Button
            size="sm"
            as="a"
            href="https://excel520.taobao.com"
            target="_blank"
            leftIcon={<LuTable />}
          >
            {t('appHome:links.github')}
          </Button>
          <Button
            size="sm"
            as="a"
            href="https://excel520.taobao.com"
            target="_blank"
            leftIcon={<LuDatabase />}
          >
            {t('appHome:links.documentation')}
          </Button>
          <Button
            size="sm"
            as="a"
            href="https://excel520.taobao.com"
            target="_blank"
            leftIcon={<LuNetwork />}
          >
            {t('appHome:links.openIssue')}
          </Button>
        </Wrap>
        {account.isSuccess && account.data.authorizations.includes('ADMIN') && (
          <Alert as={LinkBox} colorScheme="brand">
            <AlertTitle flex="none">{t('account:admin.title')}</AlertTitle>
            <Link
              as={LinkOverlay}
              ms="auto"
              gap={2}
              display="inline-flex"
              href={ROUTES_ADMIN.root()}
            >
              {t('account:admin.button')}
              <Icon icon={LuArrowRight} />
            </Link>
          </Alert>
        )}
        {/* <MarketingBento /> */}
      </Stack>
    </AppLayoutPage>
  );
}
