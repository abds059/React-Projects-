import { useNavigate } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart({ cart, removeFromCart, incrementQty, decrementQty }) {
  const navigate = useNavigate()
  const total    = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) return <p className="empty">Your cart is empty.</p>

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-list">
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
          />
        ))}
      </div>
      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
        <button onClick={() => navigate('/checkout')}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart