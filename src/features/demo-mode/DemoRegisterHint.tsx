import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';

import { env } from '@/env.mjs';

type DemoRegisterHintProps = {
  loginPath: string;
};

export const DemoRegisterHint = ({ loginPath }: DemoRegisterHintProps) => {
  if (!env.NEXT_PUBLIC_IS_DEMO) return null;

  return (
    <Alert status="warning">
      <AlertIcon />
      <AlertTitle>预览版本</AlertTitle>
      <AlertDescription>
        这是一个只读的预览版本，你可以直接{' '}
        <ChakraLink as={Link} href={loginPath} fontWeight="bold">
          登陆
        </ChakraLink>{' '}
        到系统，体验功能！
      </AlertDescription>
    </Alert>
  );
};
