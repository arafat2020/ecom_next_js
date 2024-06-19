import React from 'react'
import HomePage from '@/components/home/Home'
import { serverClient } from '@/app/_trpc/serverClient'
import Slider from '@/components/home/Slider'
 async function Home() {
  const product = await serverClient.getProducts()
  return (
    <HomePage productList={product} >
      <Slider/>
    </HomePage>
  )
}

export default Home