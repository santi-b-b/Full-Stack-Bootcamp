import ProductCard from "./ProductCard"


const Products = ({products, onProductClick}) => {

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map(product => 
          <li key = {product.id}>
            <ProductCard data ={product} onClick={onProductClick} />
          </li> 
      )}
    </ul>
  )
}

export default Products