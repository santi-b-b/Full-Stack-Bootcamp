import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  console.log('🔥 Middleware ejecutado en:', pathname);

  // Rutas públicas (solo login en tu caso)
  const publicRoutes = ['/login'];

  // Permitir rutas públicas o archivos estáticos
  if (
    publicRoutes.includes(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Verificar token
  const token = req.cookies.get('session')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|assets|favicon.ico).*)'],
};
