export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    revenue: '245,000 ر.س',
    expenses: '124,500 ر.س',
    netProfit: '120,500 ر.س',
    customers: 128,
    activeCustomers: 89,
    pendingInvoices: 14,
    performance: '68%',
    transactions: [
      { id: '1', description: 'فاتورة مبيعات رقم 1048', date: '2026-10-18', amount: '18,750 ر.س', type: 'credit' },
      { id: '2', description: 'فاتورة مشتريات رقم 3021', date: '2026-10-16', amount: '7,200 ر.س', type: 'debit' },
      { id: '3', description: 'إيراد نقدي من عملاء', date: '2026-10-15', amount: '24,000 ر.س', type: 'credit' },
      { id: '4', description: 'دفعة رواتب الموظفين', date: '2026-10-12', amount: '10,500 ر.س', type: 'debit' },
    ],
  });
}
