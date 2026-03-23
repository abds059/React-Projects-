import StudentRow from './StudentRow'

function StudentTable({ students }) {
  if (students.length === 0) return <p className="empty">No students found.</p>

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Marks</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentRow key={student.id} student={student} index={index + 1} />
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable