import { Metadata } from "next";
import PostDetailClient from "./PostDetailClient";

// Only generateMetadata is async
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Post ${params.id} | Blog Viewer`,
    description: `Details for post ${params.id}`,
  };
}

// Default export must be synchronous!
export default function PostDetailPage(props: { params: { id: string } }) {
  return <PostDetailClient id={props.params.id} />;
}