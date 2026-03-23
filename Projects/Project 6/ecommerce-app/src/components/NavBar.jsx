import { NavLink } from 'react-router-dom'

function Navbar({ totalItems }) {
  return (
    <nav>
      <span className="nav-brand">MyShop</span>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          Cart {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar