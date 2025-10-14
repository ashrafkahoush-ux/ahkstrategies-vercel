
import LeadForm from '../../../components/LeadForm';
import PartnerForm from '../../../components/PartnerForm';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  const t = useTranslations('Contact');
  return (
    <div className="container mx-auto px-4 py-16 space-y-12 max-w-4xl">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          {t('leadHeading')}
        </h2>
        <p className="mb-6 text-gray-700">{t('leadDescription')}</p>
        <LeadForm />
      </section>
      <hr />
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          {t('partnerHeading')}
        </h2>
        <p className="mb-6 text-gray-700">{t('partnerDescription')}</p>
        <PartnerForm />
      </section>
    </div>
  );
}