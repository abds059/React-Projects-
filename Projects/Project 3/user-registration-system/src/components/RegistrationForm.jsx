function RegistrationForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="form">
      <input name="name"  placeholder="Name"  value={formData.name}  onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="age"   placeholder="Age"   value={formData.age}   onChange={handleChange} />
      <input name="role"  placeholder="Role"  value={formData.role}  onChange={handleChange} />
      <button onClick={handleSubmit}>Add User</button>
    </div>
  )
}

export default RegistrationForm