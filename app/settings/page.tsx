export default function SettingsPage() {
  const settings = [
    'إعدادات الشركة',
    'العملة',
    'المستخدمون والصلاحيات',
    'الضرائب',
    'التنبيهات',
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">الإعدادات</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {settings.map((item, index) => (
          <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="font-bold text-slate-900">{item}</h2>
            <p className="mt-3 text-sm text-slate-600">إعدادات النظام الأساسية المتعلقة بمؤسسة أو شركة.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
