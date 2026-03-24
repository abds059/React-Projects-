import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <div className="post-card">
      <span className="category">{post.category}</span>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.excerpt}</p>
      <div className="card-footer">
        <span className="date">{post.date}</span>
        <Link to={`/post/${post.id}`}>Read more →</Link>
      </div>
    </div>
  )
}

export default PostCard