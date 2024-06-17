import  Nav  from '@/components/admin/nav/Nav';
import React from 'react'

function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main className='w-screen h-screen flex'>
      <Nav />
        {children}
    </main>
  )
}

export default AdminLayout