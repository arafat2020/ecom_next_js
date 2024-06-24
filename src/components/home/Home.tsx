"use client"

import { serverClient } from '@/app/_trpc/serverClient'
import React from 'react'
import CardOne from '../card/CardOne';
import ServiceList from '../ServiceCard';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type ProductListType = Awaited<ReturnType<typeof serverClient.getProducts>>;

function HomePage({ productList, children }: { productList: ProductListType, children: React.ReactNode }) {
  return (
    <div className="max-w-full ">
      {children}
      <ServiceList />
      <div className='max-w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3 px-3'>
        {
          productList.map(e => {
            return <CardOne key={e.id} {...e} />
          })
        }
      </div>
    </div>
  )
}

export default HomePage