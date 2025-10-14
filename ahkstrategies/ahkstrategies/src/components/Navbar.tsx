"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const pathname = usePathname();
  // Build path without the locale prefix so the toggle can preserve the route
  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '');
  return (
    <header className="bg-primary text-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-xl font-semibold">
          AHKStrategies
        </Link>
        <nav className="space-x-4 flex items-center">
          <Link href={`/${locale}/`} className="hover:underline">
            {t('home')}
          </Link>
          <Link href={`/${locale}/about`} className="hover:underline">
            {t('about')}
          </Link>
          <Link href={`/${locale}/services`} className="hover:underline">
            {t('services')}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:underline">
            {t('contact')}
          </Link>
          <LanguageToggle currentPath={pathWithoutLocale} />
        </nav>
      </div>
    </header>
  );
}