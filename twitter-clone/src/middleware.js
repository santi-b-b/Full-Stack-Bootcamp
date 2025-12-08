import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Rutas públicas (login y favicons)
  const publicRoutes = ['/login', '/favicon.ico', '/favicon.png'];

  // Permitir rutas públicas o archivos estáticos
  if (
    publicRoutes.includes(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/assets')
  ) {
    return NextResponse.next();
  }

  // Verificar token (Edge Runtime compatible)
  const session = req.cookies.get('session');

  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|assets|favicon.ico|favicon.png).*)'],
};
