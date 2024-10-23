import { createProducts } from 'prisma/seed/models/product';
import { createUsers } from 'prisma/seed/models/user';
import { prisma } from 'prisma/seed/utils';

async function main() {
  await createProducts();
  await createUsers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
