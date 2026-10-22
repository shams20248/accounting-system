import Link from 'next/link';
import { ArrowUpRight, BarChart3, BookOpen, Building2, FileText, HandCoins, Package2, Settings, Truck, Users } from 'lucide-react';

const stats = [
  { label: 'الإيرادات', value: '245,000 ر.س', accent: 'emerald' },
  { label: 'المصروفات', value: '124,500 ر.س', accent: 'rose' },
  { label: 'صافي الربح', value: '120,500 ر.س', accent: 'blue' },
  { label: 'العملاء', value: '128', accent: 'amber' },
];

const quickLinks = [
  { href: '/accounts', label: 'الحسابات', icon: HandCoins },
  { href: '/journal', label: 'دفتر اليومية', icon: BookOpen },
  { href: '/invoices', label: 'الفواتير', icon: FileText },
  { href: '/customers', label: 'العملاء', icon: Users },
  { href: '/suppliers', label: 'الموردون', icon: Truck },
  { href: '/products', label: 'المخزون', icon: Package2 },
  { href: '/reports', label: 'التقارير', icon: BarChart3 },
  { href: '/settings', label: 'الإعدادات', icon: Settings },
];

export default function DashboardPage() {
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
        {stats.map(({ label, value, accent }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
              </div>
              <div className={`rounded-xl p-3 ${accent === 'emerald' ? 'bg-emerald-100 text-emerald-600' : accent === 'rose' ? 'bg-rose-100 text-rose-600' : accent === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                <Building2 className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="mb-5 text-lg font-bold text-slate-900">أقسام النظام</h2>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <Link key={label} href={href} className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-4 font-medium text-slate-800">{label}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="mb-5 text-lg font-bold text-slate-900">ملخص الأداء</h2>
          <div className="space-y-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">النسبة</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">68%</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">الفواتير المستحقة</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">14</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
