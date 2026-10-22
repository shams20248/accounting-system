import { NotebookPen, ReceiptText } from 'lucide-react';

const entries = [
  { description: 'إيداع نقدي من العميل', account: 'الصندوق', amount: '+15,000 ر.س', type: 'إيراد' },
  { description: 'شراء مواد مكتبية', account: 'المشتريات', amount: '-2,200 ر.س', type: 'مصروف' },
  { description: 'دفع راتب الموظف', account: 'رواتب', amount: '-4,500 ر.س', type: 'مصروف' },
];

export default function JournalPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">القيود اليومية</p>
          <h1 className="text-2xl font-bold text-slate-900">دفتر اليومية</h1>
        </div>
        <button className="rounded-xl bg-violet-600 px-4 py-2 font-medium text-white hover:bg-violet-700">
          إضافة قيد جديد
        </button>
      </header>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.description} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <NotebookPen className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">{entry.description}</h2>
                <p className="text-xs text-slate-500">{entry.account}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${entry.type === 'إيراد' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {entry.type}
              </span>
              <p className={`font-bold ${entry.type === 'إيراد' ? 'text-emerald-600' : 'text-rose-600'}`}>{entry.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
