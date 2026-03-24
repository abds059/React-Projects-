import { useState }    from 'react'
import { useNavigate } from 'react-router-dom'

const empty = { name: '', email: '', age: '', course: '', grade: '' }

function AddStudent({ addStudent }) {
  const navigate        = useNavigate()
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  function validate() {
    const e = {}
    if (!form.name.trim())   
        e.name   = 'Required'
    if (!form.email.trim())  
        e.email  = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email  = 'Invalid email'
    if (!form.age)  
        e.age    = 'Required'
    else if (form.age < 1 || form.age > 100)
        e.age    = 'Invalid age'
    if (!form.course.trim()) 
        e.course = 'Required'
    if (!form.grade.trim())  
        e.grade  = 'Required'
    return e
  }

  function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    addStudent(form)
    navigate('/students')
  }

  return (
    <div>
      <h1>Add Student</h1>
      <div className="form">
        {[
          { name: 'name',   placeholder: 'Full Name'  },
          { name: 'email',  placeholder: 'Email'      },
          { name: 'age',    placeholder: 'Age'        },
          { name: 'course', placeholder: 'Course'     },
          { name: 'grade',  placeholder: 'Grade (A-F)'},
        ].map(field => (
          <div className="field" key={field.name}>
            <input
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              className={errors[field.name] ? 'input-error' : ''}
            />
            {errors[field.name] && <span className="error">{errors[field.name]}</span>}
          </div>
        ))}
        <button onClick={handleSubmit}>Add Student</button>
      </div>
    </div>
  )
}

export default AddStudent