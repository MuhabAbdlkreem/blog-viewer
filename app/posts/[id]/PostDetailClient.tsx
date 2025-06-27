"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const images = [
  "https://mybusinessfuture.com/wp-content/uploads/2018/10/iStock-897667680.jpg",
  "https://attentiontodetail.com/wp-content/uploads/2018/03/open-office-shared-desks-1024x683.jpeg",
  "https://imageio.forbes.com/specials-images/imageserve/6374247230ba5799d921ad49/Business-People-Working-in-The-Office/960x0.jpg?format=jpg&width=960",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3rMtC11ncVNHl7VbdbG0zXb6l6j4kpjCmA&s",
];

export default function PostDetailClient({ id }: { id: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch post");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-[#171923] rounded-2xl shadow-lg animate-pulse">
        <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 rounded mb-6" />
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4" />
        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full mb-2" />
        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-5/6 mb-2" />
        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-4/6 mb-8" />
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-center text-red-600">
        <h1 className="text-2xl font-bold mb-4">Failed to load post</h1>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-[#171923] rounded-2xl shadow-lg">
      <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 rounded mb-6 overflow-hidden flex items-center justify-center">
        <img
          src={images[Number(id) % images.length]}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 leading-tight">{post.title}</h1>
      <p className="text-gray-700 dark:text-gray-200 mb-8 whitespace-pre-line text-lg">{post.body}</p>
      <Link href="/posts" className="inline-block text-blue-600 hover:underline transition-colors font-medium" aria-label="Back to Posts">&larr; Back to Posts</Link>
    </div>
  );
} 