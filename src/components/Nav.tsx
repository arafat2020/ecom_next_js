"use client"
import {
    BellRing,
    CircleUserRound
    , Search,
    ShoppingBag,
    TruckIcon,
} from 'lucide-react'
import React from 'react'
import { MdAccessAlarm } from 'react-icons/md'
import { Input } from './ui/input'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getChert } from '@/lib/app/features/chert/chert'
import { sideBarOpen } from '@/lib/app/features/fn/fn'


function Nav() {
    const chertData = useSelector(getChert)
    const disPatch = useDispatch()
    return (
        <div className='w-full h-[80px] bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 flex items-center shadow-lg'>
            <Link href='/home' >
                <div className='flex items-center space-x-2 p-3'>
                    <TruckIcon className='w-[50px] h-[50px] text-amber-600 bg-gradient-to-tl from-amber-100 via-green-100 to-yellow-300 rounded-full p-1' />
                    <h1 className='font-sans font-semibold text-slate-50 text-xl'>Nano Mart</h1>
                </div>
            </Link>
            <div className='flex-grow'>
                <form className='w-full flex px-8 space-x-3 bg-slate-800 py-1 rounded-2xl' action="">
                    <Input type='text' placeholder='Search Product' className='bg-transparent rounded-3xl border-0 ' />
                    <button><Search className='h-[30px] w-[30px] text-amber-600' /></button>
                </form>
            </div>
            <div className='p-3 flex space-x-3'>

                <div onClick={()=>disPatch(sideBarOpen())} className='relative'>
                    <ShoppingBag className='h-[30px] w-[30px] text-amber-600' />
                    <div className='bg-rose-600 w-[23px] h-[23px] absolute top-[-6px] right-[-9px] flex border-[3px] border-slate-800 justify-around text-amber-200 font-sans items-center rounded-full m-1'>{chertData.length}</div>
                </div>

                <div className=''>
                    <BellRing className='h-[30px] w-[30px] text-amber-600' />
                </div>
                <div className=''>
                    <CircleUserRound className='h-[30px] w-[30px] text-amber-600' />
                </div>
            </div>
        </div>
    )
}

export default Nav