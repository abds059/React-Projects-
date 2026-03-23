import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout({ cart, clearCart }) {
  const navigate  = useNavigate()
  const [form, setForm]       = useState({ name: '', email: '', address: '' })
  const [errors, setErrors]   = useState({})
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = 'Enter a valid email'
    if (!form.address.trim()) e.address = 'Address is required'
    return e
  }

  function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    clearCart()
    setSuccess(true)
    setTimeout(() => navigate('/'), 2000)
  }

  if (cart.length === 0 && !success) return <p className="empty">Nothing to checkout.</p>

  if (success) return (
    <div className="success">
      <h2>Order Placed! ✓</h2>
      <p>Redirecting you home...</p>
    </div>
  )

  return (
    <div>
      <h1>Checkout</h1>
      <div className="form">
        <div className="field">
          <input name="name"    placeholder="Full Name"       value={form.name}    onChange={handleChange} />
          {errors.name    && <span className="error">{errors.name}</span>}
        </div>
        <div className="field">
          <input name="email"   placeholder="Email"           value={form.email}   onChange={handleChange} />
          {errors.email   && <span className="error">{errors.email}</span>}
        </div>
        <div className="field">
          <input name="address" placeholder="Delivery Address" value={form.address} onChange={handleChange} />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <button onClick={handleSubmit}>Place Order</button>
      </div>
    </div>
  )
}

export default Checkout