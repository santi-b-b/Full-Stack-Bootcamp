import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartProvider"
import { FilterProvider } from "./context/filterProvider";
import Layout from "./components/Layout";
import './App.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  return (
    <CartProvider>
      <FilterProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </FilterProvider>
    </CartProvider>
  );
}

export default App;
