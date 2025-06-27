// app/posts/[id]/page.tsx
import { Metadata } from "next";
import PostDetailClient from "./PostDetailClient";

// ✅ Correct metadata type
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  return {
    title: `Post ${params.id} | Blog Viewer`,
    description: `Details for post ${params.id}`,
  };
}

// ✅ Must stay synchronous!
export default function PostDetailPage({ params }: { params: { id: string } }) {
  return <PostDetailClient id={params.id} />;
}
