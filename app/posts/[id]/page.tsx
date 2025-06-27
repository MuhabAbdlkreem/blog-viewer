import { Metadata } from "next";
import PostDetailClient from "./PostDetailClient";

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Optionally fetch post for SEO, or just use the ID
  return {
    title: `Post ${params.id} | Blog Viewer`,
    description: `Details for post ${params.id}`,
  };
}

export default function PostDetailPage({ params }: Props) {
  return <PostDetailClient id={params.id} />;
} 