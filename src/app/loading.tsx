"use client"
import React from 'react'

function Loading() {
  return (
    <div style={{
       backgroundImage: "url(/bg.jpg)"
    }} className="flex items-center justify-center min-h-screen bg-center bg-no-repeat">
      <div className="w-28 h-28 border-t-4 border-b-4 border-cyan-500 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading