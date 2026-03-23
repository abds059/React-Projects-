function ProductCard({ product, addToCart, added }) {
  return (
    <div className="product-card">
      <p className="category">{product.category}</p>
      <h2>{product.name}</h2>
      <p className="price">${product.price}</p>
      <button onClick={() => addToCart(product)}>
        {added ? 'Added ✓' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard