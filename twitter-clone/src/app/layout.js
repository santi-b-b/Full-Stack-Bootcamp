import './globals.css';
import Header from '@/components/Header';
import VerticalMenu from '@/components/VerticalMenu';
export const metadata = {
  title: 'Mi App',
  description: 'Layout con contenedor central y espacios laterales',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-grow bg-gray-100">
        {/* Espacio lateral izquierdo opcional */}
        <div className="sticky top-0 flex max-w-[100] flex-1 items-start justify-end p-3 pr-4 md:flex">
          <VerticalMenu></VerticalMenu>
        </div>

        {/* Contenedor central */}
        <div className="flex flex-2">
          {/* Contenido principal */}
          <main className="flex max-w-[600px] flex-col bg-white">{children}</main>

          {/* Espacio lateral derecho opcional */}
          <div className="hidden w-full flex-1 p-4 md:flex">
            {/* Aquí puedes poner contenido adicional opcional */}
          </div>
        </div>
      </body>
    </html>
  );
}
