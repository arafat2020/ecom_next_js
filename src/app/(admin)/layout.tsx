import  Nav  from '@/components/admin/nav/Nav';
import React from 'react'

function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='w-screen h-screen flex'>
      <Nav />
        {children}
    </div>
  )
}

export default AdminLayout