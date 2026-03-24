import posts    from '../data/posts'
import PostCard from '../components/PostCard'

function Home() {
  return (
    <div>
      <h1>Latest Posts</h1>
      <div className="post-grid">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Home