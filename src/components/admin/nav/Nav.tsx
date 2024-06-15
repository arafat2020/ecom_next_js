import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React from 'react'
import { MdInventory } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { IoIosExit } from "react-icons/io";
import Link from 'next/link';
import { BiSolidCategoryAlt } from "react-icons/bi";


function Nav() {
    return (
        <div className='w-1/6'><div className=" w-full flex flex-col items-center bg-white dark:bg-zinc-800 h-screen p-4 pt-0 font-sans">
            <div className="mb-2">
                <Image className='bg-green-500 rounded-3xl mt-3' src="/logo3.png" height={300} width={300} alt="Boosto Logo" />
            </div>
            <div className="mb-8 flex flex-col items-center">
                <Avatar className='w-[50px] h-[50px]'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <p className="text-lg font-semibold text-zinc-900 dark:text-white">Jonathan Roy</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">CEO</p>
                </div>
            </div>
            <nav className="flex flex-col items-start space-y-2 w-full text-slate-700 font-medium">
                <Link href="/admin" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
                    <MdInventory className='scale-150' />
                    <span className="text-zinc-900 dark:text-white">Dashboard</span>
                </Link>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
                    <MdPersonSearch className='scale-150' />
                    <span className="text-zinc-900 dark:text-white">Customers</span>
                </a>
                <Link href="/admin/product" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
                    <AiFillProduct className='scale-150' />
                    <span className="text-zinc-900 dark:text-white">Products</span>
                </Link>
                <Link href="/admin/category" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
                    <BiSolidCategoryAlt className='scale-150' />
                    <span className="text-zinc-900 dark:text-white">Category</span>
                </Link>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
                    <IoSettings className='scale-150' />
                    <span className="text-zinc-900 dark:text-white">Settings</span>
                </a>
            </nav>
            <div className="mt-auto">
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
                <IoIosExit className='scale-150' />
                    <span className="text-zinc-900 dark:text-white">Exit</span>
                </a>
            </div>
        </div></div>
    )
}

export default Nav