import { useNavigate } from 'react-router-dom'
import StudentRow from '../components/StudentRow'

function Students({ students }) {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-header">
        <h1>Students</h1>
        <button onClick={() => navigate('/add')}>+ Add Student</button>
      </div>

      {students.length === 0
        ? <p className="empty">No students yet.</p>
        : <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Grade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <StudentRow key={student.id} student={student} index={i + 1} />
              ))}
            </tbody>
          </table>
      }
    </div>
  )
}

export default Students