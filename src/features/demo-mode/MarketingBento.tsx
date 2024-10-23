import { Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export const MarketingBento = () => {
  return (
    <Grid
      gap="2"
      templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' }}
    >
      <GridItem
        borderRadius="md"
        bg="blackAlpha.200"
        rowSpan={2}
        aspectRatio={0.7}
        overflow="hidden"
      >
        <Link
          href="https://bear.studio/assets-start-ui-bento-01"
          target="_blank"
        >
          <Image
            src="/images/logo.png"
            alt="推广内容，点击查看详情介绍"
            width={420}
            height={600}
            sizes="420px"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </GridItem>
      <GridItem
        borderRadius="md"
        bg="blackAlpha.200"
        aspectRatio={1.45}
        overflow="hidden"
      >
        <Link
          href="https://bear.studio/assets-start-ui-bento-02"
          target="_blank"
        >
          <Image
            src="/images/logo.png"
            alt="推广内容，点击查看详情介绍"
            width={420}
            height={290}
            sizes="420px"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </GridItem>
      <GridItem
        borderRadius="md"
        bg="blackAlpha.200"
        rowSpan={2}
        aspectRatio={0.7}
        overflow="hidden"
      >
        <Link
          href="https://bear.studio/assets-start-ui-bento-03"
          target="_blank"
        >
          <Image
            src="/images/logo.png"
            alt="推广内容，点击查看详情介绍"
            width={420}
            height={600}
            sizes="420px"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </GridItem>
      <GridItem
        borderRadius="md"
        bg="blackAlpha.200"
        aspectRatio={1.45}
        overflow="hidden"
      >
        <Link
          href="https://bear.studio/assets-start-ui-bento-04"
          target="_blank"
        >
          <Image
            src="/images/logo.png"
            alt="推广内容，点击查看详情介绍"
            width={420}
            height={290}
            sizes="420px"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </GridItem>
      <Text
        fontSize="xs"
        gridColumn="1/-1"
        textAlign="center"
        style={{ textWrap: 'balance' }}
      >
        推广一下 🚀 凡是遇到麻烦的事情 😅 请记得联系我们 😉，微信：coopwin888
      </Text>
    </Grid>
  );
};
