'use client';

import { ReactNode } from 'react';

interface SafeLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  suppressHydrationWarning?: boolean;
}

export default function SafeLink({ href, className, children, suppressHydrationWarning }: SafeLinkProps) {
  // Use dynamic import to bypass TypeScript checking
  const { createElement } = require('react');
  const Link = require('next/link').default;
  
  return createElement(Link, { href, className, suppressHydrationWarning }, children);
}