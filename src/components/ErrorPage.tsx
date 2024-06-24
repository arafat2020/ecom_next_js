/* eslint-disable react/no-unescaped-entities */
// app/error.js (for App Router in Next.js 13)
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-5/6 bg-gray-100 text-gray-800 text-center">
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-6">Something went wrong. We're working on it!</p>
      <Link href="/home">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
