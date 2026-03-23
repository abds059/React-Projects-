function CartItem({ item, removeFromCart, incrementQty, decrementQty }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <button onClick={() => decrementQty(item.id)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementQty(item.id)}>+</button>
        <button className="remove" onClick={() => removeFromCart(item.id)}>✕</button>
      </div>
    </div>
  )
}

export default CartItem