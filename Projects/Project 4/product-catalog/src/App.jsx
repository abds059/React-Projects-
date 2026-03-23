import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import './App.css'

const products = [
  { id: 1, name: 'Wireless Headphones', price: 79,  category: 'Electronics' },
  { id: 2, name: 'Running Shoes',        price: 55,  category: 'Footwear'    },
  { id: 3, name: 'Coffee Maker',         price: 45,  category: 'Kitchen'     },
  { id: 4, name: 'Yoga Mat',             price: 25,  category: 'Fitness'     },
  { id: 5, name: 'Desk Lamp',            price: 35,  category: 'Home'        },
  { id: 6, name: 'Bluetooth Speaker',    price: 60,  category: 'Electronics' },
  { id: 7, name: 'Water Bottle',         price: 15,  category: 'Fitness'     },
  { id: 8, name: 'Backpack',             price: 50,  category: 'Accessories' },
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [maxPrice, setMaxPrice]     = useState('')

  const filtered = products
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => maxPrice === '' || p.price <= Number(maxPrice))

  return (
    <section id="center">
      <h1>Product Catalog</h1>
      <SearchBar
        searchTerm={searchTerm}
        maxPrice={maxPrice}
        setSearchTerm={setSearchTerm}
        setMaxPrice={setMaxPrice}
      />
      <ProductList products={filtered} />
    </section>
  )
}

export default App