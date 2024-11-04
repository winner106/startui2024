import {
  createApiEndpoints,
  createApiKeys,
  createApiPackages,
} from 'prisma/seed/models/api';
import {
  createExcelProducts,
  createProducts,
} from 'prisma/seed/models/product';
import { createUsers } from 'prisma/seed/models/user';
import { prisma } from 'prisma/seed/utils';

async function main() {
  await createProducts();
  await createExcelProducts();
  await createUsers();
  await createApiPackages(); // 调用生成 Api 套餐的函数
  await createApiEndpoints();
  await createApiKeys();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
