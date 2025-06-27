import { Metadata } from "next";
import PostDetailClient from "./PostDetailClient";

// Use inline typing for params as required by Next.js App Router
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Post ${params.id} | Blog Viewer`,
    description: `Details for post ${params.id}`,
  };
}

export default function PostDetailPage({ params }: { params: { id: string } }) {
  return <PostDetailClient id={params.id} />;
}