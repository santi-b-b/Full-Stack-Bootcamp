import { FaPlus } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const ModalProductDetail = ({ product, onClose }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  if (!product) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Busca el producto en el carrito
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-sm shadow-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <div className="flex flex-row gap-3 h-[80vh] p-2">
          <div className="relative flex-2 w-full bg-gray-100 rounded overflow-hidden flex flex-col justify-between">
            <img
              src={product.images[0]}
              alt={product.imagedescription}
              className="aspect-[9/12] object-contain w-full"
            />
            <div className="absolute bottom-2 right-2 flex items-center gap-2">
              {quantity > 0 ? (
                <>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="text-gray-700 hover:text-black text-[10px] flex items-center px-2 py-1 bg-white rounded"
                  >
                    -
                  </button>
                  <span className="text-xs">{quantity}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-gray-700 hover:text-black text-[10px] flex items-center px-2 py-1 bg-white rounded"
                  >
                    +
                  </button>
                </>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="text-gray-700 hover:text-black text-[10px] flex items-center px-2 py-1 rounded"
                >
                  <FaPlus className="w-3 h-3 mr-1" /> ADD TO THE CART
                </button>
              )}
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className="flex flex-col justify-between h-full text-[15px] mb-8">
              <p className="uppercase">{product.title}</p>
              <p className="text-gray-700 text-justify mb-2">{product.description}</p>
              <p> ${product.price.toLocaleString('de-DE')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProductDetail;