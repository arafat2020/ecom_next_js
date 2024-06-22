import { serverClient } from '@/app/_trpc/serverClient';
import React from 'react'
import { ScrollArea } from './ui/scroll-area';
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type ElementType<T> = T extends (infer U)[] ? U : never;
type Product = Awaited<ReturnType<typeof serverClient.getProducts>>;
type RxProduct = {
    obj: ElementType<Product>,
    quantity: number
}[]
function ProductCheckout({ products }: { products: RxProduct }) {
    return (
        <div className="container mx-auto p-6">
            <ScrollArea className='w-full h-2/3'>
            <h1 className="text-3xl font-bold mb-4">Checkout Page</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                {products.map(product => (
                    <div key={product.obj.id} className="mb-4 border-b pb-4">
                        <h2 className="text-xl font-semibold">{product.obj.name}</h2>
                        <p className="text-gray-600">{product.obj.description}</p>
                        <div className="flex items-center mt-2">
                            <p className="text-lg font-medium">Price: ${product.obj.discount ? (product.obj.price * ((100 - product.obj.discount) / 100)).toFixed(2) : product.obj.price}</p>
                            <input
                                type="number"
                                min="1"
                                value={product.quantity}
                                className="ml-4 border rounded p-1 w-16 text-center"
                            />
                        </div>
                    </div>
                ))}
                <div className="text-right mt-4">
                    <h2 className="text-2xl font-bold">Total: </h2>
                </div>
            </div>
            </ScrollArea>
        </div>
    )
}

export default ProductCheckout