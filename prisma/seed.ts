import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const company = await prisma.company.upsert({
    where: { id: 'company-001' },
    update: {},
    create: {
      id: 'company-001',
      name: 'شركة ميزان المحاسبة',
      taxNumber: '0000000000',
      currency: 'SAR',
      phone: '0500000000',
      email: 'info@mizan-accounting.com',
      address: 'الرياض, السعودية',
    },
  });

  await prisma.user.upsert({
    where: { email: 'admin@mizan-accounting.com' },
    update: {},
    create: {
      name: 'مدير النظام',
      email: 'admin@mizan-accounting.com',
      password: '$2a$10$QhGITG5s4eJr2E6dHb7aSew7Ot1h8XsJc4YF8yH5Vg4y6pI0dQjQG',
      role: 'ADMIN',
      companyId: company.id,
    },
  });

  const cash = await prisma.account.upsert({
    where: { id: 'cash-001' },
    update: {},
    create: {
      id: 'cash-001',
      name: 'الصندوق',
      code: '101',
      type: 'ASSET',
      companyId: company.id,
    },
  });

  const sales = await prisma.account.upsert({
    where: { id: 'sales-001' },
    update: {},
    create: {
      id: 'sales-001',
      name: 'المبيعات',
      code: '401',
      type: 'REVENUE',
      companyId: company.id,
    },
  });

  const expense = await prisma.account.upsert({
    where: { id: 'expense-001' },
    update: {},
    create: {
      id: 'expense-001',
      name: 'المصروفات',
      code: '501',
      type: 'EXPENSE',
      companyId: company.id,
    },
  });

  const customer = await prisma.customer.upsert({
    where: { id: 'cust-001' },
    update: {},
    create: {
      id: 'cust-001',
      name: 'شركة الهدى',
      phone: '0500000001',
      email: 'info@alhuda.com',
      companyId: company.id,
    },
  });

  const supplier = await prisma.supplier.upsert({
    where: { id: 'supp-001' },
    update: {},
    create: {
      id: 'supp-001',
      name: 'شركة النور',
      phone: '0500000002',
      email: 'info@alnoor.com',
      companyId: company.id,
    },
  });

  const product = await prisma.product.upsert({
    where: { id: 'prod-001' },
    update: {},
    create: {
      id: 'prod-001',
      name: 'خدمة استشارية',
      sku: 'SRV-001',
      category: 'خدمات',
      price: 1200,
      stock: 20,
      companyId: company.id,
    },
  });

  const invoice = await prisma.invoice.upsert({
    where: { number: 'INV-1001' },
    update: {},
    create: {
      number: 'INV-1001',
      customerId: customer.id,
      companyId: company.id,
      issueDate: new Date(),
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: 'PAID',
      subtotal: 1200,
      tax: 180,
      total: 1380,
      notes: 'فاتورة تجريبية لنظام ميزان المحاسبة',
      items: {
        create: [{
          description: 'خدمة استشارية',
          quantity: 1,
          unitPrice: 1200,
          total: 1200,
          productId: product.id,
        }],
      },
    },
  });

  await prisma.payment.upsert({
    where: { id: 'pay-001' },
    update: {},
    create: {
      id: 'pay-001',
      invoiceId: invoice.id,
      amount: 1380,
      method: 'BANK',
      reference: 'BANK-1254',
      paymentDate: new Date(),
    },
  });

  await prisma.expense.upsert({
    where: { id: 'exp-001' },
    update: {},
    create: {
      id: 'exp-001',
      description: 'شراء مستلزمات مكتب',
      category: 'مشتريات',
      amount: 850,
      expenseDate: new Date(),
      supplierId: supplier.id,
      companyId: company.id,
    },
  });

  await prisma.journalEntry.upsert({
    where: { number: 'JE-1001' },
    update: {},
    create: {
      number: 'JE-1001',
      description: 'إيراد من العميل',
      entryDate: new Date(),
      lines: {
        create: [
          { accountId: cash.id, debit: 1380, description: 'إيداع نقدي' },
          { accountId: sales.id, credit: 1380, description: 'إيراد مبيعات' },
        ],
      },
    },
  });

  await prisma.setting.upsert({
    where: { id: 'set-001' },
    update: {},
    create: {
      id: 'set-001',
      key: 'company_name',
      value: 'شركة ميزان المحاسبة',
      companyId: company.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
