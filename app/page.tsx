import Link from 'next/link';
import { ArrowUpRight, Building2, DollarSign, FileText, ReceiptText, TrendingUp, Users } from 'lucide-react';
import { getDashboardSummary } from '@/lib/data';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const summary = await getDashboardSummary();

  const cards = [
    { title: 'إجمالي الإيرادات', value: summary.revenue, icon: DollarSign, tone: 'emerald' },
    { title: 'إجمالي المصروفات', value: summary.expenses, icon: ReceiptText, tone: 'rose' },
    { title: 'صافي الربح', value: summary.netProfit, icon: TrendingUp, tone: 'blue' },
    { title: 'عدد العملاء', value: summary.customers, icon: Users, tone: 'amber' },
  ];

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-soft">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-100">
          <Building2 className="h-4 w-4" />
          لوحة التحكم المالية
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">نظام محاسبة متكامل</h1>
            <p className="mt-2 max-w-xl text-sm text-slate-200">
              إدارة الفواتير، المصروفات، كشف الحسابات، الحركات اليومية، والتقارير المالية في واجهة واحدة.
            </p>
          </div>
          <Link
            href="/invoices"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100"
          >
            عرض الفواتير <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ title, value, icon: Icon, tone }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{title}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
              </div>
              <div className={`rounded-xl p-3 ${tone === 'emerald' ? 'bg-emerald-100 text-emerald-600' : tone === 'rose' ? 'bg-rose-100 text-rose-600' : tone === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">المعاملات الأخيرة</h2>
            <Link href="/journal" className="text-sm font-medium text-blue-600">عرض كل الحركات</Link>
          </div>

          <div className="space-y-3">
            {summary.transactions.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div>
                  <p className="font-medium text-slate-800">{item.description}</p>
                  <p className="text-xs text-slate-500">{item.date}</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.type === 'credit' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                  {item.type === 'credit' ? 'إيراد' : 'مصروف'}
                </span>
                <p className={`font-bold ${item.type === 'credit' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="mb-5 text-lg font-bold text-slate-900">ملخص الأداء</h2>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>نسبة الإيراد إلى المصروف</span>
                <span className="font-bold text-slate-900">{summary.performance}</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-200">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" style={{ width: summary.performance }} />
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">العملاء النشطون</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{summary.activeCustomers}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">الفواتير المستحقة</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{summary.pendingInvoices}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
