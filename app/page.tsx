import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Building2, DollarSign, ReceiptText, TrendingUp, Users } from 'lucide-react';
import { getDashboardMetrics } from '@/lib/data';

export default async function HomePage() {
  const metrics = await getDashboardMetrics();

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
            <p className="mt-2 max-w-xl text-sm text-slate-200">إدارة الحسابات، الفواتير، المشتريات، الإيرادات، التقارير، والخزينة في واجهة واحدة.</p>
          </div>
          <Link href="/invoices" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-medium text-slate-900">
            عرض الفواتير <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[{label:'الإيرادات', value:metrics.revenue, icon:DollarSign},{label:'المصروفات', value:metrics.expenses, icon:ReceiptText},{label:'صافي الربح', value:metrics.netProfit, icon:TrendingUp},{label:'العملاء', value:metrics.customers, icon:Users}].map(({label, value, icon:Icon}) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
              </div>
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600"><Icon className="h-5 w-5" /></div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="mb-5 text-lg font-bold text-slate-900">المعاملات الأخيرة</h2>
          <div className="space-y-3">
            {[
              {id:1, desc:'فاتورة مبيعات', date:'2026-10-22', amount:'18,000 ر.س', type:'إيراد'},
              {id:2, desc:'شراء مستلزمات', date:'2026-10-21', amount:'7,500 ر.س', type:'مصروف'},
              {id:3, desc:'سداد من عميل', date:'2026-10-20', amount:'14,200 ر.س', type:'إيراد'},
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div>
                  <p className="font-medium text-slate-800">{item.desc}</p>
                  <p className="text-xs text-slate-500">{item.date}</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.type === 'إيراد' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>{item.type}</span>
                <p className={`font-bold ${item.type === 'إيراد' ? 'text-emerald-600' : 'text-rose-600'}`}>{item.amount}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="mb-5 text-lg font-bold text-slate-900">ملخص الأداء</h2>
          <div className="space-y-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">النسبة</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{metrics.performance}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">الفواتير المستحقة</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{metrics.pending}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
