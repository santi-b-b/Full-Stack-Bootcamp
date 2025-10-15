import { FaPlus } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
const ProductCard = ({ data, onClick }) => {
  const { addToCart } = useCart();

  return (
    <div
          className="bg-white shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300"
          onClick={() => onClick(data)}
    >
      <div className=" p-1 mb-4">
        <div className="bg-gray-100 w-full mb-4 pb-1">

          {/* IMAGE */}
          <img
            src={data.images[0]}
            alt={data.imagedescription}
            className="w-full aspect-[9/12] object-contain"
          />
          {/* BUTTON */}
          <button
            onClick={() => addToCart(data)}
            className="text-gray-500 hover:text-black text-left text-[10px] flex items-center gap-2 justify-end w-full px-2 py-1"
          >
            <FaPlus className="w-3 h-3" /> ADD TO THE CART
          </button>
      </div>

        {/* TITLE & PRICE */}
        <div className="grid grid-cols-[auto_auto] gap-1 mb-3">
          <p className="text-xs text-left uppercase">
            {data.title}
          </p>
          <p className="text-xs text-right uppercase">
            ${data.price}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-justify text-xs line-clamp-3">
          {data.description}
        </p> 

      </div>
    
    </div>
  );
};

export default ProductCard;
