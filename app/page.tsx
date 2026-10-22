import Link from 'next/link';
import { ArrowUpRight, BarChart3, Building2, DollarSign, FileText, HandCoins, Package2, ReceiptText, Settings, Truck, TrendingUp, Users } from 'lucide-react';
import { getDashboardMetrics, getRecentTransactions } from '@/lib/data';

export default async function HomePage() {
  const stats = await getDashboardMetrics();
  const transactions = await getRecentTransactions();

  const statCards = [
    { label: 'إجمالي الإيرادات', value: stats.revenue, icon: DollarSign, tone: 'emerald' },
    { label: 'إجمالي المصروفات', value: stats.expenses, icon: ReceiptText, tone: 'rose' },
    { label: 'صافي الربح', value: stats.netProfit, icon: TrendingUp, tone: 'blue' },
    { label: 'عدد العملاء', value: stats.customers.toString(), icon: Users, tone: 'amber' },
  ];

  const quickLinks = [
    { href: '/accounts', label: 'الحسابات', icon: HandCoins },
    { href: '/journal', label: 'دفتر اليومية', icon: FileText },
    { href: '/invoices', label: 'الفواتير', icon: FileText },
    { href: '/customers', label: 'العملاء', icon: Users },
    { href: '/suppliers', label: 'الموردون', icon: Truck },
    { href: '/products', label: 'المخزون', icon: Package2 },
    { href: '/reports', label: 'التقارير', icon: BarChart3 },
    { href: '/settings', label: 'الإعدادات', icon: Settings },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-soft">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
          <Building2 className="h-4 w-4" />
          لوحة تحكم ميزان المحاسبة
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">نظام محاسبي متكامل</h1>
            <p className="mt-2 max-w-xl text-sm text-slate-200">
              إدارة الحسابات العامة، دفتر اليومية، الفواتير، المصروفات، المشتريات، التقارير، والخزينة في واجهة واحدة.
            </p>
          </div>

          <Link href="/invoices" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100">
            عرض الفواتير <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map(({ label, value, icon: Icon, tone }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
              </div>
              <div className={`rounded-xl p-3 ${tone === 'emerald' ? 'bg-emerald-100 text-emerald-600' : tone === 'rose' ? 'bg-rose-100 text-rose-600' : tone === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">المعاملات الأخيرة</h2>
            <Link href="/journal" className="text-sm font-medium text-blue-600">عرض كل الحركات</Link>
          </div>

          <div className="space-y-3">
            {transactions.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div>
                  <p className="font-medium text-slate-800">{item.description}</p>
                  <p className="text-xs text-slate-500">{item.date}</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.type === 'إيراد' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                  {item.type}
                </span>
                <p className={`font-bold ${item.type === 'إيراد' ? 'text-emerald-600' : 'text-rose-600'}`}>{item.amount}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="mb-5 text-lg font-bold text-slate-900">أقسام النظام</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <Link key={label} href={href} className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-200 hover:bg-blue-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-3 font-medium text-slate-800">{label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
