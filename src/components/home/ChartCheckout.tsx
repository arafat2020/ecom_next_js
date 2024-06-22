import { addToChart, getChert, removeFromChert } from '@/lib/app/features/chert/chert'
import { SidebarClose, isSidebarOpen } from '@/lib/app/features/fn/fn'
import { MinusCircle, PlusCircle } from 'lucide-react'
import React from 'react'
import Drawer from 'react-modern-drawer'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollArea } from '../ui/scroll-area'
import { Button } from '../ui/button'


function ChartCheckout() {
    const open = useSelector(isSidebarOpen)
    const product = useSelector(getChert)
    const dispatch = useDispatch()
    const calculateDiscountedPrice = (price: number, discount: number) => {
        if (!discount) return price;
        return price - (price * discount / 100);
    };
    return (
        <>
            <Drawer
                open={open}
                onClose={() => dispatch(SidebarClose())}
                direction='right'
                size={300}
            >
                <div className='w-full h-full bg-sky-950 flex flex-col space-y-3 items-center '>
                    <h1 className='font-sans text-2xl font-semibold text-amber-100 text-center mt-3'>Product Checkout</h1>
                    <ScrollArea className='w-full h-5/6 p-3'>
                        {product.length === 0 && <div className="flex-1 flex flex-col items-center justify-around px-4 sm:px-6 text-amber-100">
                            <svg className="h-24 w-24 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 3v18m6-18v18m-9-9h18" />
                            </svg>
                            <h2 className="mt-4 text-lg font-medium ">Your cart is empty</h2>
                            <p className="mt-1 text-sm ">Looks like you haven't added anything to your cart yet.</p>
                        </div>}
                        {
                            product.map(e => {
                                return <div key={e.obj.id} className='w-full p-1 glass-bg-1 mt-3'>
                                    <div className='w-2/3 mx-auto'>
                                        <img src={e.obj.primaryImg} alt="img" srcset="" className=' w-full' />
                                        <p className='font-sans font-semibold text-amber-100'>{e.obj.name}</p>
                                    </div>
                                    <div className='w-full flex justify-around items-center my-3'>
                                        <PlusCircle
                                            onClick={() => dispatch(addToChart(e.obj))}
                                            className='text-amber-600 cursor-pointer' />
                                        <input value={e.quantity} className='w-[80px] text-center text-slate-50 bg-red-500 rounded-3xl' type="text" name="" id="" />
                                        <MinusCircle
                                            onClick={() => dispatch(removeFromChert({
                                                id: e.obj.id
                                            }))}
                                            className='text-amber-600 cursor-pointer' />
                                    </div>
                                    <p className='text-center my-3 font-sans font-semibold text-amber-100'>{calculateDiscountedPrice(e.obj.price, e.obj.discount as number) * e.quantity}$</p>
                                </div>
                            })
                        }
                    </ScrollArea>
                    <div className='flex-grow flex justify-around items-center space-x-3'>
                        <Button onClick={() => dispatch(SidebarClose())} variant="outline">Close</Button>
                        <Button>Proceed To pay</Button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default ChartCheckout