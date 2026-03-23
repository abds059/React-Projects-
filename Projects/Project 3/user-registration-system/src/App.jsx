import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import UserList from './components/UserList'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    name: '', email: '', age: '', role: ''
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    if (!formData.name || !formData.email || !formData.age || !formData.role) return
    setUsers([...users, { id: Date.now(), ...formData }])
    setFormData({ name: '', email: '', age: '', role: '' })
  }

  return (
    <section id="center">
      <h1>User Registration</h1>
      <RegistrationForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <UserList users={users} />
    </section>
  )
}

export default App