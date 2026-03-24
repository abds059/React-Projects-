import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <span className="brand">University Portal</span>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/students">Students</NavLink>
      </div>
    </nav>
  )
}

export default Navbar