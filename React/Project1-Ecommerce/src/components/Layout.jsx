import Header from "./Header";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> 
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;








