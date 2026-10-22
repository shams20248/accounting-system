export default function InvoicesPage() {
  const invoices = [
    ['شركة الهدى', 'INV-1001', '2026-10-22', '18,000 ر.س', 'مدفوعة'],
    ['مؤسسة النور', 'INV-1002', '2026-10-21', '12,500 ر.س', 'معلقة'],
    ['شركة النخبة', 'INV-1003', '2026-10-20', '9,250 ر.س', 'مدفوعة'],
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">الفواتير</h1>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <table className="min-w-full text-right">
          <thead className="bg-slate-50 text-sm text-slate-500">
            <tr>
              <th className="px-4 py-3">اسم العميل</th>
              <th className="px-4 py-3">رقم الفاتورة</th>
              <th className="px-4 py-3">التاريخ</th>
              <th className="px-4 py-3">المبلغ</th>
              <th className="px-4 py-3">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(([customer, number, date, amount, status], index) => (
              <tr key={index} className="border-t border-slate-200 text-sm text-slate-700">
                <td className="px-4 py-3">{customer}</td>
                <td className="px-4 py-3 font-medium">{number}</td>
                <td className="px-4 py-3">{date}</td>
                <td className="px-4 py-3 font-bold text-slate-900">{amount}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${status === 'مدفوعة' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
