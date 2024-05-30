import React from 'react'

function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        {children}
    </div>
  )
}

export default AdminLayout