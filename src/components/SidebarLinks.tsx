"use client"
import { serverClient } from '@/app/_trpc/serverClient';
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Checkbox } from './ui/checkbox';
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type Category = Awaited<ReturnType<typeof serverClient.getCategories>>;
function SidebarLinks({ category }: { category: Category }) {
    return (
        <div className='w-full'>
            {
                category.map(e => {
                    return <Collapsible defaultOpen key={e.id}>
                        <CollapsibleTrigger className='flex space-x-2 my-2 ml-2 p-1 items-center'>
                            <img className='w-[25px] h-[25px] bg-amber-200 p-1 rounded-lg' alt='img' src={e.img} /> <span className='text-white text-sm font-sans font-medium'>{e.name}</span>
                        </CollapsibleTrigger>
                        <CollapsibleContent className='w-full'>
                            {
                                e.subCategory.map((el) => {
                                    return <div key={el.id} className="flex items-center space-x-2 text-amber-200 ml-3 py-1">
                                        <Checkbox className='border-amber-300' />
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {el.name}
                                        </label>
                                    </div>
                                })
                            }
                        </CollapsibleContent>
                    </Collapsible>
                })
            }
        </div>
    )
}

export default SidebarLinks