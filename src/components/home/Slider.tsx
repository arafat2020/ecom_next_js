import { serverClient } from '@/app/_trpc/serverClient'
import React from 'react'
import SliderClient from './SliderClient';

async function Slider() {
    const bannerData = await serverClient.getBannerData();
    return (
        <div className='w-full h-[380px]'>
            <SliderClient bannerData={bannerData}/>
        </div>
    )
}

export default Slider