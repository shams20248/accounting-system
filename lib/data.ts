import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getDashboardMetrics() {
  return {
    revenue: '245,000 ر.س',
    expenses: '124,500 ر.س',
    netProfit: '120,500 ر.س',
    customers: 128,
    invoices: 84,
    pending: 14,
    performance: '68%',
  };
}

export default prisma;
