export default function ProductsPage() {
  const products = [
    ['خدمة استشارية', 'خدمات', '1,200 ر.س', '20'],
    ['طابعة', 'أجهزة', '2,800 ر.س', '10'],
    ['مواد مكتبية', 'مستلزمات', '180 ر.س', '140'],
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">المخزون والمنتجات</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map(([name, category, price, stock], index) => (
          <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-bold text-slate-900">{name}</h2>
            <p className="mt-2 text-sm text-slate-500">{category}</p>
            <div className="mt-4 space-y-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
              <div className="flex items-center justify-between"><span>السعر</span><span className="font-bold text-slate-900">{price}</span></div>
              <div className="flex items-center justify-between"><span>المخزون</span><span className="font-bold text-slate-900">{stock}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
