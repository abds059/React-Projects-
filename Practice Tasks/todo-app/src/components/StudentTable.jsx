import { useState } from "react";

function StudentTable() {
    const [students, setStudents] = useState([
        { roll: 1, name: "Ali", math: 80, science: 75 },
        { roll: 2, name: "Sara", math: 90, science: 85 },
        { roll: 3, name: "Ahmed", math: 70, science: 65 },
    ]);

    const handleDelete = (roll) => {
        const updatedStudents = students.filter(s => s.roll !== roll);
        setStudents(updatedStudents);
    };

    return (
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {students.map((s) => (
                    <tr key={s.roll}>
                        <td>{s.roll}</td>
                        <td>{s.name}</td>
                        <td>{s.math}</td>
                        <td>{s.science}</td>
                        <td>{s.math + s.science}</td>
                        <td>
                            <button onClick={() => handleDelete(s.roll)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentTable;