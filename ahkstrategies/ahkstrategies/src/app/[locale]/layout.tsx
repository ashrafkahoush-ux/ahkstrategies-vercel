import {NextIntlClientProvider} from 'next-intl';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';
import {ReactNode} from 'react';

export default function RootLayout({
  children, params: {locale}
}: {children: ReactNode; params: {locale: 'en'|'ar'}}) {
  const messages = locale === 'ar' ? ar : en;
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
