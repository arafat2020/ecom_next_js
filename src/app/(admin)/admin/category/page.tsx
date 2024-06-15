import { serverClient } from '@/app/_trpc/serverClient'
import CategoryList from '@/components/admin/CategoryList'
import React from 'react'

async function List() {
  const category = await serverClient.getCategories()
  return (
    <CategoryList {...category}/>
  )
}

export default List