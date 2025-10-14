import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-gray-100 text-gray-700 mt-8 border-t">
      <div className="container mx-auto px-4 py-6 text-center space-y-2">
        <p className="text-sm">{t('copyright')}</p>
        <p className="text-xs">{t('disclaimer')}</p>
      </div>
    </footer>
  );
}