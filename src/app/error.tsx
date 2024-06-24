// app/error.js
"use client"
import ErrorPage from "@/components/ErrorPage";

export default function Error({ error, reset }:{
    error: Error & { digest?: string }
    reset: () => void
  }) {

  return (
    <div className="w-full h-full flex flex-col justify-around items-center">
      <ErrorPage />
      <p className="font-sans font-normal">Cause: {error.message}</p>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 mx-auto bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
        Try Again
      </button>
    </div>
  );
}
