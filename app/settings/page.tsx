import { SlidersHorizontal, Settings2 } from 'lucide-react';

const settings = [
  'إعدادات الشركة',
  'مستخدمون وصلاحيات',
  'الفروع والمالية',
  'العملة والتقارير',
  'التنبيهات والمراسلات',
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">الإعدادات</p>
          <h1 className="text-2xl font-bold text-slate-900">إعدادات النظام</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">
          <Settings2 className="h-4 w-4" />
          حفظ التغييرات
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {settings.map((setting) => (
          <div key={setting} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">{setting}</h2>
              <SlidersHorizontal className="h-4 w-4 text-slate-400" />
            </div>
            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">إعدادات متقدمة للنظام، الإدارة، الصلاحيات والعملة.</div>
          </div>
        ))}
      </div>
    </div>
  );
}
