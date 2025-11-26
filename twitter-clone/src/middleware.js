import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  console.log('🔥 Middleware ejecutado en:', req.nextUrl.pathname);
  // Rutas públicas
  const publicRoutes = ['/login', '/register'];

  // Dejar pasar si es API pública, login, register o archivo estático
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
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|assets).*)'],
};
