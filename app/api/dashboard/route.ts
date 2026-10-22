export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    revenue: '245,000 ر.س',
    expenses: '124,500 ر.س',
    netProfit: '120,500 ر.س',
    customers: 128,
    invoices: 84,
    pending: 14,
    performance: '68%',
    transactions: [
      { id: 1, description: 'فاتورة مبيعات', date: '2026-10-22', amount: '18,000 ر.س', type: 'إيراد' },
      { id: 2, description: 'شراء مستلزمات', date: '2026-10-21', amount: '7,500 ر.س', type: 'مصروف' },
      { id: 3, description: 'سداد من عميل', date: '2026-10-20', amount: '14,200 ر.س', type: 'إيراد' },
    ],
  });
}
