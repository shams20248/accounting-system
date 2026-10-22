import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'غير موجود | ميزان المحاسبة',
  description: 'الصفحة المطلوبة غير موجودة في نظام ميزان المحاسبة',
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-soft">
        <p className="text-sm text-slate-500">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">الصفحة غير موجودة</h1>
        <p className="mt-2 text-slate-600">الرجاء العودة إلى الصفحة الرئيسية للنظام.</p>
      </div>
    </div>
  );
}
