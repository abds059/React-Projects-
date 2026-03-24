import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-brand">MyBlog</Link>
    </nav>
  )
}

export default Navbar