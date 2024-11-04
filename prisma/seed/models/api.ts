import { fakerZH_CN as faker } from '@faker-js/faker';
import { prisma } from 'prisma/seed/utils';

export async function createApiPackages() {
  console.log(`⏳ Seeding API Packages`);

  const existingCount = await prisma.apiPackage.count();
  const packagesToCreate = Math.max(0, 5 - existingCount); // 生成最多3个套餐

  await Promise.all(
    Array.from({ length: packagesToCreate }, async () => {
      await prisma.apiPackage.create({
        data: {
          name: faker.commerce.productName(), // 使用 faker 生成套餐名称
          totalRequests: faker.helpers.arrayElement([1000, 2000, 5000, 10000]), // 随机总请求数
          dailyLimit: faker.helpers.arrayElement([50, 100, 200, 300, 500]), // 随机每日请求限制
          durationDays: faker.helpers.arrayElement([
            366 / 2,
            366,
            366 * 2,
            366 * 3,
            366 * 4,
          ]), // 随机套餐持续天数
        },
      });
    })
  );

  console.log(
    `✅ ${existingCount} existing API Packages 👉 ${packagesToCreate} packages created`
  );
}

export async function createApiEndpoints() {
  console.log(`⏳ Seeding API Endpoints`);

  const existingCount = await prisma.apiEndpoint.count();
  const endpointsToCreate = Math.max(0, 5 - existingCount); // 生成最多5个API接口

  await Promise.all(
    Array.from({ length: endpointsToCreate }, async () => {
      await prisma.apiEndpoint.create({
        data: {
          name: faker.company.buzzPhrase(),
          description: faker.lorem.sentence(),
          route: faker.internet.url(),
          product: {
            connect: { id: (await prisma.excelProduct.findFirst())?.id }, // 连接到第一个产品
          },
        },
      });
    })
  );

  console.log(
    `✅ ${existingCount} existing API Endpoints 👉 ${endpointsToCreate} endpoints created`
  );
}

export async function createApiKeys() {
  console.log(`⏳ Seeding API Keys`);

  const existingCount = await prisma.apiKey.count();
  const apiKeysToCreate = Math.max(0, 15 - existingCount); // 生成最多15个API Key

  const users = await prisma.user.findMany(); // 获取所有用户
  const products = await prisma.excelProduct.findMany(); // 获取所有产品
  const endpoints = await prisma.apiEndpoint.findMany(); // 获取所有API接口
  const packages = await prisma.apiPackage.findMany(); // 获取所有API接口

  await Promise.all(
    Array.from({ length: apiKeysToCreate }, async () => {
      await prisma.apiKey.create({
        data: {
          key: faker.string.uuid(),
          package: {
            connect: { id: faker.helpers.arrayElement(packages).id },
          },
          user: {
            connect: { id: faker.helpers.arrayElement(users).id }, // 随机连接到一个用户
          },
          product: {
            connect: { id: faker.helpers.arrayElement(products).id }, // 随机连接到一个产品
          },
          endpoint: {
            connect: { id: faker.helpers.arrayElement(endpoints).id }, // 随机连接到一个API接口
          },
          status: 'ENABLED',
        },
      });
    })
  );

  console.log(
    `✅ ${existingCount} existing API Keys 👉 ${apiKeysToCreate} keys created`
  );
}
