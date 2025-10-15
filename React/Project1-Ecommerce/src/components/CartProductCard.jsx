import { FaPlus } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const CartProductCard = ({ data }) => {
const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex w-full p-1 mb-3 gap-2 text-xs border-b border-b-gray-300">
      <div className="mb-4 pb-1 ">

        {/* IMAGE */}
        <img
          src={data.images[0]}
          alt={data.imagedescription}
          className="w-40 aspect-square bg-gray-100 "
        />
      </div>

      {/* TITLE & PRICE */}
      <div className="flex flex-row justify-between w-full h-32 items-center">
        <div className="flex-1">
          <p className="text-xs text-left uppercase">
            {data.title}
          </p>
        </div>
        
        <div className="flex flex-1 items-start">
          <button 
            className="text-gray-500 hover:text-black px-2"
            onClick={() => removeFromCart(data)}
          > - </button>
          <p>{data.quantity}</p>
          <button 
            className="text-gray-500 hover:text-black px-2"
            onClick={() => addToCart(data)}
          > + </button>
        </div>

        
          <p className="text-left uppercase">
            ${(data.price * data.quantity).toLocaleString('de-DE')}
          </p>
        
      </div>
    </div>
  );
};

export default CartProductCard;
