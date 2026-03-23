import UserCard from './UserCard'

function UserList({ users }) {
  if (users.length === 0) return <p className="empty">No users yet.</p>

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList