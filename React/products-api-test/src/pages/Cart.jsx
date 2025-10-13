import CartProducts from '../components/CartProducts'
import CartSummary from '../components/CartSummary'; 
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      
      <div>
        {cart.length === 0
          ? <div>No products in the cart...</div>
          : <CartProducts />
        }
      </div>
      <CartSummary></CartSummary>
      
    </div>
  )
}

export default Cart;