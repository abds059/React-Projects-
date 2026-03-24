function CartItem({ item, incrementQty, decrementQty, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className="item-info">
        <p className="item-name">{item.name}</p>
        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="item-controls">
        <button onClick={() => decrementQty(item.id)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementQty(item.id)}>+</button>
        <button className="remove" onClick={() => removeFromCart(item.id)}>✕</button>
      </div>
    </div>
  )
}

export default CartItem