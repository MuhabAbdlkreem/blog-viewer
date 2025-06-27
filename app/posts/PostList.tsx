"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface Post {
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

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <motion.div
          key={post.id}
          className="bg-white dark:bg-[#171923] rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform"
          whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="h-40 w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <img
              src={images[post.id % images.length]}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <Link href={`/posts/${post.id}`} className="block group" aria-label={`Read post: ${post.title}`}>
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                {post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}
              </p>
              <span className="text-blue-600 font-medium group-hover:underline">Read more →</span>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 