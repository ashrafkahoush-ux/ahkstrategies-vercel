// Type overrides for React 19 compatibility
import * as React from 'react';

declare global {
  namespace React {
    // Override ReactNode to include Promise for React 19 compatibility
    type ReactNode = 
      | ReactElement 
      | string 
      | number 
      | boolean 
      | null 
      | undefined 
      | ReactNodeArray
      | Promise<ReactNode>;
    
    interface ReactNodeArray extends Array<ReactNode> {}
  }
}

declare module 'next-intl' {
  import { ReactNode } from 'react';
  
  export interface NextIntlClientProviderProps {
    locale: string;
    messages: any;
    children: ReactNode;
    [key: string]: any;
  }
  
  export const NextIntlClientProvider: React.FC<NextIntlClientProviderProps>;
}

declare module 'next/link' {
  import { ComponentType, ReactNode, AnchorHTMLAttributes } from 'react';
  
  interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    href: string;
    children: ReactNode;
    className?: string;
    suppressHydrationWarning?: boolean;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    legacyBehavior?: boolean;
  }
  
  const Link: ComponentType<LinkProps>;
  export default Link;
}