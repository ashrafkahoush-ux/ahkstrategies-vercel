"use client";
import Link from "next/link";
import { useLocale } from "next-intl";

interface LanguageToggleProps {
  currentPath: string;
}

export default function LanguageToggle({ currentPath }: LanguageToggleProps) {
  const locale = useLocale();
  const otherLocale = locale === "en" ? "ar" : "en";

  return (
    <Link
      href={`/${otherLocale}${currentPath}`}
      className="inline-block px-2 py-1 border border-white rounded text-sm hover:bg-white hover:text-black transition"
      legacyBehavior
    >
      <a className="inline-block px-2 py-1 border border-white rounded text-sm hover:bg-white hover:text-black transition">
        {otherLocale === "en" ? "English" : "العربية"}
      </a>
    </Link>
  );
}
