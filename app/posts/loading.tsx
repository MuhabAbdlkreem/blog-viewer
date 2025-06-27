export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 animate-pulse">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gray-200 h-10 w-1/2 mx-auto rounded" />
      <ul className="space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full" />
          </li>
        ))}
      </ul>
    </div>
  );
} 