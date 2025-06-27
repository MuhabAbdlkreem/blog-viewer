"use client";
import PostList, { Post } from "./PostList";

export default function PostListWrapper({ posts }: { posts: Post[] }) {
  return <PostList posts={posts} />;
} 