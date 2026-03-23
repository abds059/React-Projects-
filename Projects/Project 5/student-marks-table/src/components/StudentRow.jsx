function getGrade(marks) {
  if (marks >= 90) return 'A+'
  if (marks >= 80) return 'A'
  if (marks >= 70) return 'B'
  if (marks >= 60) return 'C'
  return 'F'
}

function StudentRow({ student, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.subject}</td>
      <td>{student.marks}</td>
      <td className={`grade grade-${getGrade(student.marks)}`}>
        {getGrade(student.marks)}
      </td>
    </tr>
  )
}

export default StudentRow