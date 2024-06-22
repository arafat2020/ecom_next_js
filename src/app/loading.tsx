"use client"
import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-rose-900 via-slate-700 to-black">
      <div className="w-28 h-28 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading