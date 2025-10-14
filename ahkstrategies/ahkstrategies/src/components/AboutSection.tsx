import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('About');
  const paragraphs: string[] = [
    t('paragraphs.0'),
    t('paragraphs.1'),
    t('paragraphs.2')
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-primary text-center">
          {t('heading')}
        </h2>
        {paragraphs.map((para, idx) => (
          <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}