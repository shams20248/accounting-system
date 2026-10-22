import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    { label: 'الإيرادات', value: '245,000 ر.س' },
    { label: 'المصروفات', value: '124,500 ر.س' },
    { label: 'صافي الربح', value: '120,500 ر.س' },
    { label: 'العملاء', value: '128' },
  ];

  const links = [
    { href: '/accounts', label: 'الحسابات' },
    { href: '/journal', label: 'دفتر اليومية' },
    { href: '/invoices', label: 'الفواتير' },
    { href: '/customers', label: 'العملاء' },
    { href: '/suppliers', label: 'الموردون' },
    { href: '/products', label: 'المخزون' },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-soft">
        <h1 className="text-3xl font-bold">لوحة التحكم</h1>
        <p className="mt-2 text-sm text-slate-200">نظام ميزان المحاسبة يتابع الأداء المالي للشركة بشكل فوري.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="mb-4 text-lg font-bold text-slate-900">الانتقالات السريعة</h2>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-medium text-slate-800 transition hover:bg-blue-50 hover:border-blue-200">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
