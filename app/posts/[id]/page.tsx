// app/posts/[id]/page.tsx
import { Metadata } from "next";
import PostDetailClient from "./PostDetailClient";

type PageProps = {
  params: {
    id: string;
  };
};

// ✅ SEO metadata for the post page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Post ${params.id} | Blog Viewer`,
    description: `Details for post ${params.id}`,
  };
}

// ✅ Page component — must be synchronous
export default function PostDetailPage({ params }: PageProps) {
  return <PostDetailClient id={params.id} />;
}
