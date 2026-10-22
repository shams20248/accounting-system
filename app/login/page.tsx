export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-2xl font-black text-white">م</div>
          <h1 className="text-2xl font-bold text-slate-900">ميزان المحاسبة</h1>
          <p className="mt-2 text-sm text-slate-500">تسجيل الدخول إلى النظام</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
            <input defaultValue="admin@mizan-accounting.com" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-right outline-none transition focus:border-blue-500" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">كلمة المرور</label>
            <input type="password" defaultValue="password123" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-right outline-none transition focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}
