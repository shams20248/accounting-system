import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Sidebar from '@/components/sidebar';

const cairo = Cairo({ subsets: ['arabic', 'latin'] });

export const metadata: Metadata = {
  title: 'ميزان المحاسبة',
  description: 'منظومة محاسبية متكاملة لإدارة الشركة والمالية',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <div className="min-h-screen bg-slate-100 text-slate-900">
          <Sidebar />
          <main className="mr-72 p-6 lg:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
