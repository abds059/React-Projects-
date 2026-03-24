import { useNavigate } from 'react-router-dom'

function StudentRow({ student, index }) {
  const navigate = useNavigate()

  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td>{student.grade}</td>
      <td>
        <button onClick={() => navigate(`/profile/${student.id}`)}>View</button>
      </td>
    </tr>
  )
}

export default StudentRow