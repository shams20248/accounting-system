import { Users } from 'lucide-react';

const customers = [
  { name: 'شركة الرؤية', phone: '0551234567', balance: '9,500 ر.س', status: 'نشط' },
  { name: 'مؤسسة الفتح', phone: '0552345678', balance: '18,200 ر.س', status: 'نشط' },
  { name: 'أبو ركن', phone: '0553456789', balance: '4,800 ر.س', status: 'معلق' },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">العملاء</p>
          <h1 className="text-2xl font-bold text-slate-900">إدارة العملاء</h1>
        </div>
        <button className="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">
          إضافة عميل جديد
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {customers.map((customer) => (
          <div key={customer.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">{customer.name}</h2>
                  <p className="text-xs text-slate-500">{customer.phone}</p>
                </div>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${customer.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {customer.status}
              </span>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
              الرصيد الحالي: <span className="font-bold text-slate-900">{customer.balance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
