import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App