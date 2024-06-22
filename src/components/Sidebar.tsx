import React from 'react'
import { serverClient } from '@/app/_trpc/serverClient'
import SidebarLinks from './SidebarLinks'


async function Sidebar() {
  const categories = await serverClient.getCategories()
  return (
    <div className='min-w-[180px] w-1/6 h-full bg-gradient-to-b from-slate-900 via-slate-800 to-sky-950'>
      <SidebarLinks category={categories}/>
    </div>
  )
}

export default Sidebar