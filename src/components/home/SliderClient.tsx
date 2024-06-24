"use client"
import { serverClient } from '@/app/_trpc/serverClient';
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type ProductListType = Awaited<ReturnType<typeof serverClient.getBannerData>>;

function SliderClient({ bannerData }: { bannerData: ProductListType }) {
    const [width, setWidth] = useState<number>()
    useEffect(() => {
        if (document === undefined) return
        window.addEventListener('resize', () => {
            setWidth(innerWidth * (83.333333 / 100))
        })
    }, [])

    return (
        <Carousel style={{
            width:`${width}px`
        }}  plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]} className='h-full bg-gradient-to-b from-rose-900 via-slate-800 to-black shadow-xl p-3'>
            <CarouselContent>
                {bannerData.map(e => {
                    return <CarouselItem
                     key={e.id} className=' w-full h-[370px] mb-3'>
                        <div className='w-full h-full flex'>
                            <div className='w-1/2 h-full'>
                               <div>
                                 <h2 className='text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[4.2rem] font-sans font-bold bg-gradient-to-r from-rose-600 via-cyan-300 to-red-600 inline-block text-transparent bg-clip-text leading-[60px]'>{e.title}</h2>
                                <h3 className='text-[.9rem] md:text-xl font-sans text-amber-100'>{e.suntitle}</h3>
                                <div className='my-5 bg-rose-600 w-fit p-2 rounded-3xl'>
                                    <p className='font-sans font-bold text-[.9rem] md:text-xl text-cyan-100'>Get {e.discount}% of</p>
                                </div>
                               </div>
                            </div>
                            <div className='w-1/2 h-full overflow-hidden z-40'>
                                <div className='w-full h-2/3 flex justify-between items-center'>
                                    <img src={e.product.primaryImg} alt="img" className='w-2/3 md:w-full' />
                                </div>
                                <div className='w-full h-1/3p-3 flex justify-around'>
                                   <div className='w-[70%] h-full glass-bg-1  flex flex-col '>
                                   <h3 className='bg-gradient-to-r from-rose-600 via-cyan-500 to-red-600 inline-block text-transparent bg-clip-text capitalize text-center text-2xl shadow-2xl font-semibold tracking-wider'>{e.product.name}</h3>
                                   <button className='w-fit mx-auto rounded-3xl font-sans font-bold text-slate-100 bg-gradient-to-r from-sky-700 via-sky-600 to-sky-400 hover:bg-gradient-to-l transition px-2 py-1 my-3'>Check Out</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                })}
            </CarouselContent>
        </Carousel>

    )
}

export default SliderClient