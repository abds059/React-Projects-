function StudentList ({studentsarray}) {

    const Students = studentsarray.map((student, index) =>
        <li key = {index}>
            {student}
        </li>
    )

    return (
        <>
            <ul>
                {Students}
            </ul>
        </>
    )
}

export default StudentList;