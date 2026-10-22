export default function JournalPage() {
  const entries = [
    ['إيراد من العميل', 'الصندوق', '+18,000 ر.س', 'إيراد'],
    ['شراء مستلزمات', 'المشتريات', '-7,500 ر.س', 'مصروف'],
    ['دفع راتب', 'الرواتب', '-6,200 ر.س', 'مصروف'],
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">دفتر اليومية</h1>
      </header>

      <div className="space-y-4">
        {entries.map(([description, account, amount, type], index) => (
          <div key={index} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
            <div>
              <h2 className="font-bold text-slate-900">{description}</h2>
              <p className="text-xs text-slate-500">{account}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${type === 'إيراد' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>{type}</span>
              <p className={`font-bold ${type === 'إيراد' ? 'text-emerald-600' : 'text-rose-600'}`}>{amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
