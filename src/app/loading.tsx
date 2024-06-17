"use client"
import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen flex bg-slate-800 justify-around items-center'>
        <div className='w-[100px] h-[100px] rounded-full border-[2px] border-cyan-700 border-b-0 border-l-0 animate-spin'/>
    </div>
  )
}

export default Loading