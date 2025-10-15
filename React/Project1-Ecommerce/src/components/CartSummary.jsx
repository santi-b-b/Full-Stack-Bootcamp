import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const CartSummary = () => {
  const { cartTotal } = useCart();
  return (
    <div className="py-4">
      <div className="flex items-center justify-end bg-white gap-4">
        <p className="justify-end">TOTAL</p>
        <p className="justify-end">${cartTotal.toLocaleString('de-DE')}</p>
      </div>
      <div className="flex items-center justify-end bg-white py-2 gap-4 text-xs">
        <p className="justify-end">Tax (19%) </p>
        <p className="justify-end">${(cartTotal*0.19).toLocaleString('de-DE')}</p>
      </div>
    </div>
  );
};

export default CartSummary;