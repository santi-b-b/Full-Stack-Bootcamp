import "./globals.css";
import Header from "@/components/Header";
import VerticalMenu from "@/components/VerticalMenu";
export const metadata = {
  title: "Mi App",
  description: "Layout con contenedor central y espacios laterales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen bg-gray-100">
        
        {/* Espacio lateral izquierdo opcional */}
        <div className="hidden flex-1 md:flex max-w-[400] p-3 pr-8 justify-end">
          <VerticalMenu></VerticalMenu>
        </div>

        {/* Contenedor central */}
        <div className="max-w-[600px] flex flex-col min-h-screen bg-white">
          
          {/* Header */}
          <Header></Header>

          {/* Contenido principal */}
          <main className="">
            {children}
          </main>

        </div>

        {/* Espacio lateral derecho opcional */}
        <div className="hidden md:flex  p-4">
          {/* Aquí puedes poner contenido adicional opcional */}
          <p>Derecha</p>
        </div>

      </body>
    </html>
  );
}
