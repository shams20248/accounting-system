import { BarChart3, Download, FileDown } from 'lucide-react';

const reportCards = [
  { label: 'إجمالي المبيعات', value: '142,000 ر.س' },
  { label: 'إجمالي المصروفات', value: '64,500 ر.س' },
  { label: 'صافي الربح', value: '77,500 ر.س' },
  { label: 'المستحقات', value: '18,400 ر.س' },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">التقارير</p>
          <h1 className="text-2xl font-bold text-slate-900">التقارير والتحليلات</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">
          <Download className="h-4 w-4" />
          تصدير التقرير
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reportCards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{card.label}</p>
                <p className="mt-3 text-2xl font-bold text-slate-900">{card.value}</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <BarChart3 className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="mb-4 text-lg font-bold text-slate-900">تقرير الربح والخسارة</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="text-sm text-emerald-700">الإيرادات</p>
            <p className="mt-2 text-2xl font-bold text-emerald-800">142,000 ر.س</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <p className="text-sm text-rose-700">المصروفات</p>
            <p className="mt-2 text-2xl font-bold text-rose-800">64,500 ر.س</p>
          </div>
        </div>
      </div>
    </div>
  );
}
