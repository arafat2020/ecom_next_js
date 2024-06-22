import { serverClient } from '@/app/_trpc/serverClient'
import Button from '@/components/Product/Button';
import { notFound } from 'next/navigation';
import React from 'react'

async function Product({ params }: { params: { id: string } }) {
    const product = await serverClient.getProduct({ id: params.id })
    const calculateDiscountedPrice = (price: number, discount: number) => {
        if (!discount) return price;
        return price - (price * discount / 100);
    };
    if (!product) {
        notFound()
    }
    return (
        <div className="w-full mx-auto p-4 bg-gradient-to-b from-rose-500 via-slate-600 to-slate-800">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <img src={product?.primaryImg} alt={product?.name} className="w-full h-auto glass-bg-1" />
                    <div className="grid grid-cols-4 gap-2 mt-2">
                        {product?.showcaseImg.map((img, index) => (
                            <img key={index} src={img} alt={`${product?.name} ${index}`} className="w-full h-auto glass-bg-1" />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 md:ml-4">
                    <h1 className="text-3xl font-bold mb-2 font-sans text-amber-100">{product?.name}</h1>
                    <p className="text-amber-50 mb-4">{product?.description}</p>
                    <div className="text-2xl font-semibold mb-4">
                        {product?.discount ? <div>
                            <span className="text-slate-500 line-through ml-2">{product?.price}$</span>
                            <span className="text-slate-50 ml-2">{calculateDiscountedPrice(product.price, product.discount)}$</span>
                        </div> : <span className="text-slate-50  ml-2">{product?.price}$</span>}
                    </div>
                    <Button obj={product}/>
                </div>
            </div>
        </div>
    )
}

export default Product