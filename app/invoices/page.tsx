import { FileText, PlusCircle, Search, Filter } from 'lucide-react';

const columns = ['اسم العميل', 'رقم الفاتورة', 'التاريخ', 'المبلغ', 'الحالة'];
const rows = [
  ['شركة الرؤية', 'INV-1048', '2026-10-18', '18,750 ر.س', 'مدفوعة'],
  ['مؤسسة الفتح', 'INV-1047', '2026-10-17', '9,400 ر.س', 'معلّقة'],
  ['أبو ركن', 'INV-1046', '2026-10-16', '5,900 ر.س', 'مدفوعة'],
];

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">إدارة الفواتير</p>
          <h1 className="text-2xl font-bold text-slate-900">الفواتير</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          <PlusCircle className="h-4 w-4" />
          فاتورة جديدة
        </button>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute right-3 top-3 h-4 w-4 text-slate-400" />
            <input placeholder="بحث عن فاتورة" className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 pr-10 pl-3 outline-none ring-0 focus:border-blue-500" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
            <Filter className="h-4 w-4" />
            فلتر
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-right">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                {columns.map((column) => (
                  <th key={column} className="px-4 py-3 font-medium">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([customer, number, date, amount, status], index) => (
                <tr key={index} className="border-b border-slate-200 text-sm text-slate-700">
                  <td className="px-4 py-3">{customer}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{number}</td>
                  <td className="px-4 py-3">{date}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{amount}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${status === 'مدفوعة' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
