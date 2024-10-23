import React from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import { LuDatabase, LuNetwork, LuTable } from 'react-icons/lu';

import {
  AdminLayoutPage,
  AdminLayoutPageContent,
} from '@/features/admin/AdminLayoutPage';
import { MarketingBento } from '@/features/demo-mode/MarketingBento';

export default function PageAdminDashboard() {
  const { t } = useTranslation(['adminDashboard']);
  return (
    <AdminLayoutPage containerMaxWidth="container.md">
      <AdminLayoutPageContent>
        <Heading size="md" mb="4">
          {t('adminDashboard:title')}
        </Heading>
        <Stack spacing={4}>
          <Alert status="success" colorScheme="brand" borderRadius="md">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle fontSize="lg">
                {t('adminDashboard:welcome.title')}
              </AlertTitle>
              <AlertDescription display="block">
                {t('adminDashboard:welcome.description')}
                <br />
                <Text as="a" href="https://excel520.taobao.com" target="_blank">
                  <Trans t={t} i18nKey="adminDashboard:welcome.author" />
                </Text>
              </AlertDescription>
            </Box>
          </Alert>
          <Wrap spacing={2}>
            <Button
              size="sm"
              as="a"
              href="https://excel520.taobao.com"
              target="_blank"
              leftIcon={<LuTable />}
            >
              {t('adminDashboard:links.github')}
            </Button>
            <Button
              size="sm"
              as="a"
              href="https://docs.web.start-ui.com"
              target="_blank"
              leftIcon={<LuDatabase />}
            >
              {t('adminDashboard:links.documentation')}
            </Button>
            <Button
              size="sm"
              as="a"
              href="https://github.com/BearStudio/start-ui/issues/new"
              target="_blank"
              leftIcon={<LuNetwork />}
            >
              {t('adminDashboard:links.openIssue')}
            </Button>
          </Wrap>
          {/* <MarketingBento /> */}
        </Stack>
      </AdminLayoutPageContent>
    </AdminLayoutPage>
  );
}
