import React from 'react'
import { serverClient } from './_trpc/serverClient'

async function Home() {
  const data = await serverClient.getCategories()
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Home