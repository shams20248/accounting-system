import { Package2 } from 'lucide-react';

const products = [
  { name: 'خدمة استضافة', category: 'خدمات', price: '250 ر.س', stock: '25' },
  { name: 'ورق طباعة A4', category: 'مستلزمات', price: '18 ر.س', stock: '150' },
  { name: 'طابعة ليزر', category: 'أجهزة', price: '1,800 ر.س', stock: '4' },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">المخزون والمنتجات</p>
          <h1 className="text-2xl font-bold text-slate-900">المنتجات والخدمات</h1>
        </div>
        <button className="rounded-xl bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">
          إضافة منتج جديد
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <Package2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">{product.name}</h2>
                <p className="text-xs text-slate-500">{product.category}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between"><span>السعر</span><span className="font-bold text-slate-900">{product.price}</span></div>
              <div className="flex items-center justify-between"><span>المخزون</span><span className="font-bold text-slate-900">{product.stock}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
