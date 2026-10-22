import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const company = await prisma.company.upsert({
    where: { id: 'company-default' },
    update: {},
    create: {
      id: 'company-default',
      name: 'شركة الرؤية المالية',
      taxNumber: '1234567890',
      currency: 'SAR',
      phone: '0550000000',
      email: 'info@vision-finance.com',
      address: 'الرياض - المملكة العربية السعودية',
    },
  });

  await prisma.user.upsert({
    where: { email: 'admin@vision-finance.com' },
    update: {},
    create: {
      name: 'مدير النظام',
      email: 'admin@vision-finance.com',
      password: '$2a$10$QhGITG5s4eJr2E6dHb7aSew7Ot1h8XsJc4YF8yH5Vg4y6pI0dQjQG',
      role: 'ADMIN',
      companyId: company.id,
    },
  });

  const accountCash = await prisma.account.upsert({
    where: { id: 'account-cash' },
    update: {},
    create: {
      id: 'account-cash',
      name: 'الصندوق',
      code: '101',
      type: 'ASSET',
      companyId: company.id,
    },
  });

  const accountSales = await prisma.account.upsert({
    where: { id: 'account-sales' },
    update: {},
    create: {
      id: 'account-sales',
      name: 'المبيعات',
      code: '401',
      type: 'REVENUE',
      companyId: company.id,
    },
  });

  const customer = await prisma.customer.upsert({
    where: { id: 'customer-1' },
    update: {},
    create: {
      id: 'customer-1',
      name: 'شركة الرؤية',
      phone: '0551234567',
      email: 'sales@vision.sa',
      companyId: company.id,
    },
  });

  const supplier = await prisma.supplier.upsert({
    where: { id: 'supplier-1' },
    update: {},
    create: {
      id: 'supplier-1',
      name: 'شركة النور للمواد',
      phone: '0557654321',
      email: 'info@noor-materials.sa',
      companyId: company.id,
    },
  });

  const product = await prisma.product.upsert({
    where: { id: 'product-1' },
    update: {},
    create: {
      id: 'product-1',
      name: 'خدمة استضافة',
      sku: 'HOST-001',
      category: 'خدمات',
      price: 250,
      stock: 25,
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
      subtotal: 250,
      tax: 25,
      total: 275,
      notes: 'فاتورة أولية لنظام استضافة',
      items: {
        create: [
          {
            description: 'خدمة استضافة',
            quantity: 1,
            unitPrice: 250,
            total: 250,
            productId: product.id,
          },
        ],
      },
    },
  });

  await prisma.payment.upsert({
    where: { id: 'payment-1' },
    update: {},
    create: {
      id: 'payment-1',
      invoiceId: invoice.id,
      amount: 275,
      method: 'BANK',
      reference: 'BANK-REF-001',
    },
  });

  await prisma.expense.upsert({
    where: { id: 'expense-1' },
    update: {},
    create: {
      id: 'expense-1',
      description: 'شراء مستلزمات مكتبية',
      category: 'مشتريات',
      amount: 2200,
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
          { accountId: accountCash.id, debit: 275, description: 'إيداع نقدي' },
          { accountId: accountSales.id, credit: 275, description: 'إيراد مبيعات' },
        ],
      },
    },
  });

  await prisma.setting.upsert({
    where: { id: 'setting-1' },
    update: {},
    create: {
      id: 'setting-1',
      key: 'company_name',
      value: company.name,
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
