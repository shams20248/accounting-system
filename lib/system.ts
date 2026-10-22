import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ['error'] });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export async function getSystemSettings() {
  return {
    companyName: 'شركة الرؤية المالية',
    currency: 'ر.س',
    fiscalYear: '2026',
    timezone: 'Asia/Riyadh',
  };
}
