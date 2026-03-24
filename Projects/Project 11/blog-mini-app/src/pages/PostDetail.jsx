import { useParams, useNavigate } from 'react-router-dom'
import posts from '../data/posts'

function PostDetail() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const post     = posts.find(p => p.id === Number(id))

  if (!post) return <p className="empty">Post not found.</p>

  return (
    <div className="post-detail">
      <button onClick={() => navigate('/')}>← Back</button>
      <span className="category">{post.category}</span>
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <p className="content">{post.content}</p>
    </div>
  )
}

export default PostDetail