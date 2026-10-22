export type DashboardMetric = {
  revenue: string;
  expenses: string;
  netProfit: string;
  customers: number;
  invoices: number;
  pending: number;
  performance: string;
};

export async function getDashboardMetrics(): Promise<DashboardMetric> {
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

export type RecentTransaction = {
  id: number;
  description: string;
  date: string;
  amount: string;
  type: 'إيراد' | 'مصروف';
};

export async function getRecentTransactions(): Promise<RecentTransaction[]> {
  return [
    { id: 1, description: 'فاتورة مبيعات', date: '2026-10-22', amount: '18,000 ر.س', type: 'إيراد' },
    { id: 2, description: 'شراء مستلزمات', date: '2026-10-21', amount: '7,500 ر.س', type: 'مصروف' },
    { id: 3, description: 'سداد من عميل', date: '2026-10-20', amount: '14,200 ر.س', type: 'إيراد' },
    { id: 4, description: 'دفع رواتب', date: '2026-10-19', amount: '6,200 ر.س', type: 'مصروف' },
  ];
}
