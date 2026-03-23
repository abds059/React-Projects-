import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home     from './pages/Home'
import Products from './pages/Products'
import Cart     from './pages/Cart'
import Checkout from './pages/Checkout'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  function incrementQty(id) {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  function decrementQty(id) {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  function clearCart() {
    setCart([])
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BrowserRouter>
      <Navbar totalItems={totalItems} />
      <div id="center">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/products"  element={<Products cart={cart} addToCart={addToCart} />} />
          <Route path="/cart"      element={<Cart cart={cart} removeFromCart={removeFromCart} incrementQty={incrementQty} decrementQty={decrementQty} />} />
          <Route path="/checkout"  element={<Checkout cart={cart} clearCart={clearCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App