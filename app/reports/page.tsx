export default function ReportsPage() {
  const cards = [
    ['إجمالي المبيعات', '245,000 ر.س'],
    ['إجمالي المصروفات', '124,500 ر.س'],
    ['صافي الربح', '120,500 ر.س'],
    ['المستحقات', '18,400 ر.س'],
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">التقارير المالية</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label, value], index) => (
          <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
