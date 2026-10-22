export default function AccountsPage() {
  const accounts = [
    ['101', 'الصندوق', 'أصل'],
    ['201', 'الذمم المدينة', 'التزام'],
    ['401', 'المبيعات', 'إيراد'],
    ['501', 'المصروفات', 'مصروف'],
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">الحسابات العامة</h1>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <table className="min-w-full text-right">
          <thead className="bg-slate-50 text-sm text-slate-500">
            <tr>
              <th className="px-4 py-3">الرقم</th>
              <th className="px-4 py-3">اسم الحساب</th>
              <th className="px-4 py-3">النوع</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map(([code, name, type], index) => (
              <tr key={index} className="border-t border-slate-200 text-sm text-slate-700">
                <td className="px-4 py-3">{code}</td>
                <td className="px-4 py-3 font-medium text-slate-900">{name}</td>
                <td className="px-4 py-3">{type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
