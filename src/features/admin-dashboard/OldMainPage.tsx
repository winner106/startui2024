import React from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { LuDatabase, LuNetwork, LuTable } from 'react-icons/lu';

// 这是原生的首页，和公开的首页基本一样
export function OldMainPage() {
  const { t } = useTranslation(['adminDashboard']);
  return (
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
  );
}
