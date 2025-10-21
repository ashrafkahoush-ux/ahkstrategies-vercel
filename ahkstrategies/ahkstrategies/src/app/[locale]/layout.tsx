import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import ClientProvider from '../../components/ClientProvider';

export default async function RootLayout({
  children, params: {locale}
}: {children: ReactNode; params: {locale: 'en'|'ar'}}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <ClientProvider locale={locale} messages={messages}>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
