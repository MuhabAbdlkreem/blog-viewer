import type { Metadata } from "next";
import PostListWrapper from "./PostListWrapper";
import type { Post } from "./PostList";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Posts | Blog Viewer",
  description: "Browse a list of posts fetched from an external API.",
});

// Fetch posts server-side
async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function PostsPage() {
  let posts: Post[] = [];
  let error = null;
  try {
    posts = await getPosts();
  } catch (err) {
    error = (err as Error).message;
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-center text-red-600">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Posts</h1>
      <PostListWrapper posts={posts} />
    </div>
  );
} 