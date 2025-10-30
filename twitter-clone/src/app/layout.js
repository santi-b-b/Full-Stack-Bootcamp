import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Mi App",
  description: "Layout con contenedor central y espacios laterales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen bg-gray-100">
        
        {/* Espacio lateral izquierdo opcional */}
        <div className="hidden md:flex w-1/6 p-4 bg-gray-50">
          {/* Aquí puedes poner contenido adicional opcional */}
          <p>Izquierda</p>
        </div>

        {/* Contenedor central */}
        <div className="flex-1 max-w-[600px] mx-auto flex flex-col min-h-screen bg-white">
          
          {/* Header */}
          <Header></Header>

          {/* Contenido principal */}
          <main className="flex-1">
            {children}
          </main>

        </div>

        {/* Espacio lateral derecho opcional */}
        <div className="hidden md:flex w-1/6 p-4 bg-gray-50">
          {/* Aquí puedes poner contenido adicional opcional */}
          <p>Derecha</p>
        </div>

      </body>
    </html>
  );
}
