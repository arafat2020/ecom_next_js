"use client"
import { serverClient } from '@/app/_trpc/serverClient';
import { addToChart, getChert } from '@/lib/app/features/chert/chert';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '../ui/use-toast';
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type ElementType<T> = T extends (infer U)[] ? U : never;
type Product = Awaited<ReturnType<typeof serverClient.getProducts>>;


function Button({ obj }: { obj: ElementType<Product> }) {
    const disPatch = useDispatch()
    const data = useSelector(getChert)
    const { toast } = useToast()


    return (
        <button onClick={() => {
            disPatch(addToChart(obj))
            toast({
                title: "Product Add to cher",
                description: (<div>
                    <p className='font-bold underline'>Details</p>
                    <p >Price {obj.name}</p>
                    <p >Type {obj.SubCategory?.name}</p>
                    <p >Price {obj.price}$</p>
                </div>)
            })
        }} className="bg-blue-500 text-white px-4 py-2 rounded">Add To chert</button>
    )
}

export default Button