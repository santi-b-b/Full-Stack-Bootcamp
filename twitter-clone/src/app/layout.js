// app/layout.jsx
import '@/app/globals.css';
import { UserProvider } from '@/contexts/userContext';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
