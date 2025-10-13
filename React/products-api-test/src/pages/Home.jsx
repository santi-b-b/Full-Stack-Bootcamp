import Products from '../components/Products'
import ProductsService from '../services/ProductsService'
import { useState, useEffect } from 'react'
import { useFilters } from '../hooks/useFilter'
import Filter from '../components/Filter'
import ModalProductDetail from '../components/ModalProductDetail'

const Home = () => {
  const [products, setProdcuts] = useState([])
  const [filteredProducts, setFilterProdcuts] = useState([])
  const { category, searchText, setCategories } = useFilters();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    ProductsService
      .getAll()
      .then(initialProducts => {
      setProdcuts(initialProducts)
      const cats = ["All categories", ...new Set(initialProducts.products.map((p) => p.category))];
      setCategories(cats);
    })
  }, [])

  useEffect(() => {
    if(products.products){
      setFilterProdcuts(
        products.products.filter(p => {
          return (
            (!category || category === "All categories" || p.category === category) &&
            (!searchText || p.title.toLowerCase().includes(searchText.toLowerCase()))
          )
        })
      )
    }
  }, [products, category, searchText])
    
  return (
    <div>
      <Filter />
      <div className="min-h-screen font-sans">
        <Products
          products={filteredProducts}
          onProductClick={setSelectedProduct}
        />
        <ModalProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </div>
  )
}

export default Home;