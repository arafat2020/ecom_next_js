import Link from 'next/link'
import React from 'react'

function ProductNav(){
  return (
    <div className='w-full p-3 flex justify-between'>
      <h2 className='font-sans font-medium text-2xl text-slate-700'>Product List</h2>
      <Link href='/admin/product/add'>
        <button className='bg-cyan-400 px-2 py-1 rounded-md'>Add Product</button>
      </Link>
    </div>
  )
}

function Products() {
  return (
    <div className='w-full'>
      <ProductNav/>
    </div>
  )
}

export default Products