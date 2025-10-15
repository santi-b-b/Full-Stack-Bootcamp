import CartProductCard from "./CartProductCard"
import { useCart } from "../hooks/useCart"


const CartProducts = () => {

  const { cart } = useCart();

  return (
    <ul className="gap-4">
      {cart.map(product => 
          <li key = {product.id}>
            <CartProductCard data ={product}/>
          </li> 
      )}
    </ul>
  )
}

export default CartProducts