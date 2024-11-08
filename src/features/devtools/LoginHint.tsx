import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { env } from '@/env.mjs';

export const LoginHint = () => {
  const form = useFormContext();
  const mockedEmail = 'admin@admin.com';

  if (env.NEXT_PUBLIC_NODE_ENV !== 'development' && !env.NEXT_PUBLIC_IS_DEMO)
    return null;

  return (
    <Alert status="info">
      <AlertIcon />
      <AlertTitle textTransform="capitalize">
        {env.NEXT_PUBLIC_IS_DEMO ? 'Demo mode' : env.NEXT_PUBLIC_NODE_ENV}
      </AlertTitle>
      <AlertDescription>
        体验本网站，你可以用这个邮箱登陆，点击自动填写→{' '}
        <ChakraLink
          as="button"
          type="button"
          fontWeight="bold"
          onClick={() => form.setValue('email', mockedEmail)}
        >
          {mockedEmail}
        </ChakraLink>
      </AlertDescription>
    </Alert>
  );
};
