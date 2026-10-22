export default function SuppliersPage() {
  const suppliers = [
    ['شركة النور', '0500000004', '7,200 ر.س', 'نشط'],
    ['مورد العرب', '0500000005', '4,800 ر.س', 'نشط'],
    ['شركة التميز', '0500000006', '9,100 ر.س', 'معلق'],
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">الموردون</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {suppliers.map(([name, phone, balance, status], index) => (
          <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-bold text-slate-900">{name}</h2>
            <p className="mt-2 text-sm text-slate-500">{phone}</p>
            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">الرصيد: <span className="font-bold text-slate-900">{balance}</span></div>
            <span className={`mt-4 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${status === 'نشط' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
