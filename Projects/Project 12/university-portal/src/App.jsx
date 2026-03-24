import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import initialStudents from './data/students'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'
import Profile from './pages/Profile'
import './App.css'

function App() {
  const [students, setStudents] = useState(initialStudents)

  function addStudent(student) {
    setStudents(prev => [...prev, { id: Date.now(), ...student }])
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div id="center">
        <Routes>
          <Route path="/"            element={<Home       students={students} />}                      />
          <Route path="/students"    element={<Students   students={students} />}                      />
          <Route path="/add"         element={<AddStudent addStudent={addStudent} />}                  />
          <Route path="/profile/:id" element={<Profile    students={students} />}                      />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App