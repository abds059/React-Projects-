import { useParams, useNavigate } from 'react-router-dom'

function Profile({ students }) {
  const { id }   = useParams()
  const navigate = useNavigate()
  const student  = students.find(s => s.id === Number(id))

  if (!student) return <p className="empty">Student not found.</p>

  return (
    <div>
      <button onClick={() => navigate('/students')}>← Back</button>
      <div className="profile-card">
        <div className="avatar">{student.name.charAt(0)}</div>
        <h2>{student.name}</h2>
        <div className="info-list">
          <div className="info-row">
            <span className="label">Email</span>
            <span>{student.email}</span>
          </div>
          <div className="info-row">
            <span className="label">Age</span>
            <span>{student.age}</span>
          </div>
          <div className="info-row">
            <span className="label">Course</span>
            <span>{student.course}</span>
          </div>
          <div className="info-row">
            <span className="label">Grade</span>
            <span>{student.grade}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile