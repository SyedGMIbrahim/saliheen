import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/browse',
  '/matches',
  '/chat',
  '/video',
  '/interests',
];

const adminRoutes = ['/admin'];

const authRoutes = ['/login', '/signup'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if user is authenticated (you'll need to implement this based on your auth solution)
  const isAuthenticated = false; // TODO: Implement actual auth check
  const isAdmin = false; // TODO: Implement actual admin check
  
  // Protect admin routes
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    if (!isAuthenticated || !isAdmin) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // Protect general authenticated routes
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // Redirect authenticated users away from auth pages
  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
