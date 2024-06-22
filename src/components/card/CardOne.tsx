/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { serverClient } from '@/app/_trpc/serverClient';
import Link from 'next/link';
import React from 'react';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type ElementType<T> = T extends (infer U)[] ? U : never;
type Product = Awaited<ReturnType<typeof serverClient.getProducts>>;

function CardOne(prop: ElementType<Product>) {
  return (
    <div className='col-span-1 min-h-[330px] rounded-md bg-gradient-to-tr from-indigo-950 via-slate-900 to-sky-900 flex flex-col shadow-xl'>
      <div className='w-full h-1/2 p-1 flex justify-around items-center overflow-hidden'>
        <img src={prop.primaryImg} className='w-full rounded-md ' alt='img' />
      </div>
      <div className='w-full p-3 text-amber-100'>
        <h3 className='font-sans text-[1.25rem] capitalize font-semibold'>{prop.name}</h3>
        <p className='font-sans text-sm line-clamp-1'>{prop.description}</p>
      </div>
      <div className='w-1/3  h-[35px] bg-gradient-to-r from-rose-700 via-rose-600 to-pink-500 flex justify-around items-center rounded-r-full'>
        <p className='font-sans font-bold text-slate-50 text-xl w-fit'>{prop.price}$</p>
      </div>
      <div className='my-3 px-3'>
        <Link href={`/product/${prop.id}`}>
          <button className='w-full rounded-3xl font-sans font-bold text-slate-100 bg-gradient-to-r from-sky-700 via-sky-600 to-sky-400 hover:bg-gradient-to-l transition p-2'>Check Out</button>
        </Link>
      </div>
    </div>
  );
}

export default CardOne;
