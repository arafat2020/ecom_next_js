"use client"
import Link from 'next/link';
import React from 'react'
 type CategoryListProp = {
  id: string;
  name: string;
  subCategory: {
      id: string;
      name: string;
  }[];
}[]
function CategoryNav(){
  return (
    <div className='w-full p-3 flex justify-between'>
      <h2 className='font-sans font-medium text-2xl text-slate-700'>Category List</h2>
      <Link href='/admin/category/add'>
        <button className='bg-cyan-400 px-2 py-1 rounded-md'>Add Category</button>
      </Link>
    </div>
  )
}
function CategoryList(prop:CategoryListProp) {
  // console.log(prop);
  return (
    <div className='p-6 bg-amber-50 rounded-l-3xl w-full'>
      <CategoryNav/>
    </div>
  )
}

export default CategoryList