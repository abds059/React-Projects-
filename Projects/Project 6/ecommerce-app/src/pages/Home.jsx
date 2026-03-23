import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="home">
      <h1>Welcome to MyShop</h1>
      <p>Simple, clean, minimal shopping.</p>
      <button onClick={() => navigate('/products')}>Shop Now</button>
    </div>
  )
}

export default Home