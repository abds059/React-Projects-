import { useState } from 'react'
import FilterBar from './components/FilterBar'
import StudentTable from './components/StudentTable'
import './App.css'

const students = [
  { id: 1,  name: 'Ali Hassan',    subject: 'Math',    marks: 88 },
  { id: 2,  name: 'Sara Khan',     subject: 'Science', marks: 75 },
  { id: 3,  name: 'Omar Sheikh',   subject: 'Math',    marks: 92 },
  { id: 4,  name: 'Fatima Malik',  subject: 'English', marks: 65 },
  { id: 5,  name: 'Bilal Ahmed',   subject: 'Science', marks: 80 },
  { id: 6,  name: 'Zara Hussain',  subject: 'English', marks: 70 },
  { id: 7,  name: 'Hamza Raza',    subject: 'Math',    marks: 55 },
  { id: 8,  name: 'Ayesha Noor',   subject: 'Science', marks: 90 },
  { id: 9,  name: 'Usman Tariq',   subject: 'English', marks: 78 },
  { id: 10, name: 'Hira Baig',     subject: 'Math',    marks: 83 },
]

const subjects = ['All', ...Array.from(new Set(students.map(s => s.subject)))]

function App() {
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [sortOrder, setSortOrder]             = useState('asc')

  const processed = [...students]
    .filter(s => selectedSubject === 'All' || s.subject === selectedSubject)
    .sort((a, b) => sortOrder === 'asc' ? a.marks - b.marks : b.marks - a.marks)

  function toggleSort() {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
  }

  return (
    <section id="center">
      <h1>Student Marks</h1>
      <FilterBar
        subjects={subjects}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        sortOrder={sortOrder}
        toggleSort={toggleSort}
      />
      <StudentTable students={processed} />
    </section>
  )
}

export default App