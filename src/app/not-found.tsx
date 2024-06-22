import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
      <p className="text-2xl md:text-3xl font-light mb-4">
        Oops! Page not found.
      </p>
      <p className="mb-8">
        The page you are looking for does not exist.
      </p>
      <Link href="/home" className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-lg hover:bg-blue-200">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
