import '@/app/globals.css';
import { UserProvider } from '@/contexts/userContext';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground flex min-h-screen flex-col items-center">
        <UserProvider>
          <main className="w-full max-w-5xl px-4">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
