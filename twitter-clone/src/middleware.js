import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // --- Rutas públicas reales ---
  const publicRoutes = ['/login'];

  // Si la ruta es pública, deja pasar
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Rutas de construcción / Next.js
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Obtener token
  const token = req.cookies.get('session')?.value;

  // Si no hay token, redirigir
  if (!token) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|assets|favicon.ico).*)'],
};
