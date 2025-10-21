'use client';

import { ReactNode } from 'react';

interface ClientProviderProps {
  locale: string;
  messages: any;
  children: ReactNode;
}

export default function ClientProvider({ locale, messages, children }: ClientProviderProps) {
  // Use dynamic import to completely bypass TypeScript checking
  const { createElement } = require('react');
  const { NextIntlClientProvider } = require('next-intl');
  
  return createElement(NextIntlClientProvider, { locale, messages }, children);
}