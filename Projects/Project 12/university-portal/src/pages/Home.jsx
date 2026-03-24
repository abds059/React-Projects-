import StatCard from '../components/StatCard'

function Home({ students }) {
  const courses = new Set(students.map(s => s.course)).size

  return (
    <div>
      <h1>Welcome Back</h1>
      <p className="subtitle">University Student Portal</p>
      <div className="stats">
        <StatCard label="Total Students" value={students.length} />
        <StatCard label="Courses"        value={courses}         />
      </div>
    </div>
  )
}

export default Home