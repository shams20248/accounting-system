import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة',
  description: 'الصفحة غير موجودة في نظام المحاسبة',
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
      <div>
        <p className="text-sm text-slate-500">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">الصفحة غير موجودة</h1>
        <p className="mt-2 text-slate-600">الرجاء العودة إلى لوحة التحكم.</p>
      </div>
    </div>
  );
}
