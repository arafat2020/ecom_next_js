import React from 'react'
import HomePage from '@/components/home/Home'
import { serverClient } from '@/app/_trpc/serverClient'
 async function Home() {
  const product = await serverClient.getProducts()
  return (
    <HomePage productList={product} />
  )
}

export default Home