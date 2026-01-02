import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { Prisma } from '../generated/prisma/browser';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    password: 'alice',
    causes: {
      create: [
        {
          title: 'Save the Forest',
          description: 'Help us protect endangered forests.',
          goalAmount: 10000,
        },
      ],
    },
  },
  {
    name: 'Bob',
    email: 'bob@prisma.io',
    password: 'bob',
  },
];

const donationData: Prisma.DonationCreateInput[] = [
  {
    amount: 10000,
    donor: { connect: { email: 'alice@prisma.io' } },
    cause: {
      connect: { id: '123' },
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  for (const d of donationData) {
    await prisma.donation.create({ data: d });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
