"use client"

import { serverClient } from '@/app/_trpc/serverClient'
import React from 'react'
import CardOne from '../card/CardOne';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type ProductListType = Awaited<ReturnType<typeof serverClient.getProducts>>;

function HomePage({productList}:{productList:ProductListType}) {
  console.log(productList);
  return (
    <div className="w-full ">  
    <div className='w-full grid grid-cols-4 gap-3 p-3'>
    {
      productList.map(e=>{
        return <CardOne key={e.id} {...e}/>
      })
    }
    </div>
    </div>
  )
}

export default HomePage