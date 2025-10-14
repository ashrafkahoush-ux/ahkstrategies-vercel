import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

// Configure locales and default locale for i18n routing. The middleware
// ensures that users who visit the root URL are redirected to the default
// locale and that unknown paths return 404s.
export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
});

export const config = {
  // This matcher runs the middleware on all requests except for
  // static assets and API routes.
  matcher: [
    '/((?!api|_next|.*\..*).*)'
  ]
};