import Link from 'next/link';
import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  DollarSign,
  FileText,
  House,
  Package2,
  Settings,
  Truck,
  Users,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'لوحة التحكم', icon: House },
  { href: '/customers', label: 'العملاء', icon: Users },
  { href: '/suppliers', label: 'الموردون', icon: Truck },
  { href: '/products', label: 'المنتجات', icon: Package2 },
  { href: '/invoices', label: 'الفواتير', icon: FileText },
  { href: '/journal', label: 'دفتر اليومية', icon: BookOpen },
  { href: '/reports', label: 'التقارير', icon: BarChart3 },
  { href: '/settings', label: 'الإعدادات', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="fixed right-0 top-0 z-20 h-screen w-72 border-l border-slate-200 bg-slate-950 px-4 py-6 text-slate-300 shadow-soft">
      <div className="mb-8 flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
          م
        </div>
        <div>
          <p className="text-sm text-slate-300">شركة الرؤية</p>
          <p className="text-lg font-bold text-white">المالية</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 p-4">
        <p className="text-sm text-slate-300">متوسط الربح الشهري</p>
        <p className="mt-2 text-2xl font-bold text-white">81,200 ر.س</p>
      </div>
    </aside>
  );
}
