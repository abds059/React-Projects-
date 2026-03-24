import { useState } from 'react'
import CartItem    from './components/CartItem'
import CartSummary from './components/CartSummary'
import './App.css'

const initialCart = [
  { id: 1, name: 'Wireless Headphones', price: 79,  quantity: 1 },
  { id: 2, name: 'Yoga Mat',            price: 25,  quantity: 2 },
  { id: 3, name: 'Coffee Maker',        price: 45,  quantity: 1 },
]

function App() {
  const [cart, setCart] = useState(initialCart)

  function incrementQty(id) {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  function decrementQty(id) {
    setCart(cart
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0)
    )
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section id="center">
      <h1>My Cart</h1>
      {cart.length === 0
        ? <p className="empty">Your cart is empty.</p>
        : <>
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                incrementQty={incrementQty}
                decrementQty={decrementQty}
                removeFromCart={removeFromCart}
              />
            ))}
            <CartSummary total={total} />
          </>
      }
    </section>
  )
}

export default App