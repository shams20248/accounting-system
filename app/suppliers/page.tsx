import { Truck } from 'lucide-react';

const suppliers = [
  { name: 'شركة النور للمواد', phone: '0551112233', balance: '12,300 ر.س', status: 'نشط' },
  { name: 'مكتبة الخليج', phone: '0552223344', balance: '4,900 ر.س', status: 'معلق' },
  { name: 'المعهد الصناعي', phone: '0553334455', balance: '8,100 ر.س', status: 'نشط' },
];

export default function SuppliersPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">الموردون</p>
          <h1 className="text-2xl font-bold text-slate-900">إدارة الموردين</h1>
        </div>
        <button className="rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">
          إضافة مورد جديد
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {suppliers.map((supplier) => (
          <div key={supplier.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">{supplier.name}</h2>
                  <p className="text-xs text-slate-500">{supplier.phone}</p>
                </div>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${supplier.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {supplier.status}
              </span>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
              الرصيد الحالي: <span className="font-bold text-slate-900">{supplier.balance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
