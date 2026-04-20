export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div>
      <h1>Blog</h1>

      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
    
  )
}