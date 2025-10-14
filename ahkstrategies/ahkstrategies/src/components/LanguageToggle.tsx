"use client";

import Link from 'next/link';
import { useLocale } from 'next-intl';

interface LanguageToggleProps {
  /**
   * The path without the locale prefix, starting with a slash. For example `/about` or `/contact`.
   */
  currentPath: string;
}

export default function LanguageToggle({ currentPath }: LanguageToggleProps) {
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  return (
    <Link
      href={`/${otherLocale}${currentPath}`}
      className="px-2 py-1 border border-white rounded text-sm hover:bg-white hover:text-primary transition"
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}