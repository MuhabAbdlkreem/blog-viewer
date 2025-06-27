"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="max-w-2xl mx-auto mt-10 text-center text-red-600">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
} 