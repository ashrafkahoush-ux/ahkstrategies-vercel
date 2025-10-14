import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('Services');
  const services = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      icon: '⚡'
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      icon: '🤝'
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      icon: '🚀'
    }
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          {t('heading')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}