import './globals.css';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Lazily load analytics scripts only on the client. Using dynamic import
// prevents them from being rendered on the server.
const Analytics = dynamic(() => import('../components/Analytics'), { ssr: false });

export const metadata = {
  title: {
    default: 'AHKStrategies – Deals‑First Growth Consultancy',
    template: '%s | AHKStrategies'
  },
  description: 'AHKStrategies empowers businesses with AI‑driven mobile apps and strategic partnerships to unlock growth.',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // The root layout cannot access the locale – the nested layout for each locale sets lang and dir.
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
        {/* Analytics scripts for Plausible and GA4 */}
        <Analytics />
      </body>
    </html>
  );
}