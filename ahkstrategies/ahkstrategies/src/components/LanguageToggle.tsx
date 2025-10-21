"use client";

import { useLocale } from "next-intl";
import SafeLink from "./SafeLink";

interface LanguageToggleProps {
  currentPath: string;
}

export default function LanguageToggle({ currentPath }: LanguageToggleProps) {
  const locale = useLocale();
  const otherLocale = locale === "en" ? "ar" : "en";

  return (
    <SafeLink
      href={`/${otherLocale}${currentPath}`}
      className="px-2 py-1 border border-white rounded text-sm hover:bg-white hover:text-black transition"
      suppressHydrationWarning
    >
      {otherLocale === "en" ? "English" : "العربية"}
    </SafeLink>
  );
}
