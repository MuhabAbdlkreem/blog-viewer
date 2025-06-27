import PostDetailClient from "./PostDetailClient";
import type { Metadata } from "next";

interface PostPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  // Optionally fetch post for SEO, or just use the ID
  return {
    title: `Post ${params.id} | Blog Viewer`,
    description: `Details for post ${params.id}`,
  };
}

export default function PostDetailPage({ params }: PostPageProps) {
  return <PostDetailClient id={params.id} />;
} 