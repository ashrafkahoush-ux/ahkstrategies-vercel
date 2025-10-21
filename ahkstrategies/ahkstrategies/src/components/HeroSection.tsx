import { useTranslations, useLocale } from 'next-intl';
import SafeLink from './SafeLink';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
          {t('title')}
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-600">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <SafeLink
            href={`/${locale}/contact#lead-form`}
            className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
          >
            {t('ctaLead')}
          </SafeLink>
          <SafeLink
            href={`/${locale}/contact#partner-form`}
            className="bg-accent text-white px-6 py-3 rounded hover:bg-accent-dark transition"
          >
            {t('ctaPartner')}
          </SafeLink>
        </div>
      </div>
    </section>
  );
}