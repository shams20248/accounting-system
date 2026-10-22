import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'نظام المحاسبة المتكاملة',
  description: 'لوحة تحكم محاسبية كاملة لإدارة الحسابات، الفواتير، المصروفات، التقارير والعمليات المالية.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-100 text-slate-900">
          <Sidebar />
          <main className="mr-72 p-6 lg:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
