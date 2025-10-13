import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const Header = () => {
  const { cart, cartItemCount } = useCart();
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center px-8 py-4 bg-white/70 backdrop-blur-md border-b border-b-gray-300">
      <nav className="flex gap-32 text-gray-500 ">
        <Link to="/" className="hover:text-black">HOME</Link>
        <Link to="/about" className=" hover:text-black">ABOUT US</Link>
        <Link to="/contact" className="hover:text-black">CONTACT US</Link>
      </nav>
      <div className="absolute right-8">
        <Link to = "/cart">
          <FaShoppingCart className="text-2xl text-gray-500 hover:text-black cursor-pointer" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] rounded-full px-1.5 py-0.5">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </header>

  );
};

export default Header;