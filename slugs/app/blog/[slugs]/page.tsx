import { posts } from "@/data/posts";

export default function PostPage({ params }) {
  console.log("URL slug:", params.slug);

  const post = posts.find(
  (p) => p.slug.toLowerCase() === params.slug.toLowerCase()
);

  console.log("FOUND:", post);

  if (!post) return <h1>Post Not Found</h1>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}