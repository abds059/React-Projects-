function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-category">{product.category}</div>
      <h2>{product.name}</h2>
      <p className="product-price">${product.price}</p>
    </div>
  )
}

export default ProductCard