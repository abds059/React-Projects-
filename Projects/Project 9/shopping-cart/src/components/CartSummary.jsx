function CartSummary({ total }) {
  return (
    <div className="summary">
      <span>Total</span>
      <strong>${total.toFixed(2)}</strong>
    </div>
  )
}

export default CartSummary