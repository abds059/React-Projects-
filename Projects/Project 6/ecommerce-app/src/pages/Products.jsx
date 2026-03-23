import products    from '../data/products'
import ProductCard from '../components/ProductCard'

function Products({ cart, addToCart }) {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            added={cart.some(item => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Products