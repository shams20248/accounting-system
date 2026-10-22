import Link from 'next/link';
import { BarChart3, BookOpen, Building2, FileText, HandCoins, Package2, Settings, Truck, Users } from 'lucide-react';

const items = [
  { href: '/', label: 'لوحة التحكم', icon: Building2 },
  { href: '/customers', label: 'العملاء', icon: Users },
  { href: '/suppliers', label: 'الموردون', icon: Truck },
  { href: '/products', label: 'المخزون', icon: Package2 },
  { href: '/invoices', label: 'الفواتير', icon: FileText },
  { href: '/journal', label: 'دفتر اليومية', icon: BookOpen },
  { href: '/accounts', label: 'الحسابات', icon: HandCoins },
  { href: '/reports', label: 'التقارير', icon: BarChart3 },
  { href: '/settings', label: 'الإعدادات', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="fixed right-0 top-0 h-screen w-72 border-l border-slate-200 bg-slate-950 p-5 text-slate-200">
      <div className="mb-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white">م</div>
        <div>
          <p className="text-xs text-slate-400">نظام</p>
          <h2 className="text-lg font-bold text-white">ميزان المحاسبة</h2>
        </div>
      </div>

      <nav className="space-y-2">
        {items.map(({ href, label, icon: Icon }) => (
          <Link key={label} href={href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-slate-800 hover:text-white">
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
