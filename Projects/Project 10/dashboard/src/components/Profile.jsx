const user = {
  name:     'Ali Hassan',
  email:    'ali@example.com',
  phone:    '+92 300 1234567',
  location: 'Karachi, Pakistan',
  joined:   'March 2024',
}

function Profile() {
  return (
    <div className="profile">
      <div className="avatar">{user.name.charAt(0)}</div>
      <h2>{user.name}</h2>
      <div className="info-list">
        <div className="info-row">
          <span className="label">Email</span>
          <span>{user.email}</span>
        </div>
        <div className="info-row">
          <span className="label">Phone</span>
          <span>{user.phone}</span>
        </div>
        <div className="info-row">
          <span className="label">Location</span>
          <span>{user.location}</span>
        </div>
        <div className="info-row">
          <span className="label">Joined</span>
          <span>{user.joined}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile