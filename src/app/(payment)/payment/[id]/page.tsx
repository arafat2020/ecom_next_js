/* eslint-disable @next/next/no-img-element */
import Product from '@/app/(main)/product/[id]/page'
import { serverClient } from '@/app/_trpc/serverClient'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

async function page({ params }: { params: { id: string } }) {
  const payment = await serverClient.getCreatedPayment({
    id: params.id
  })
  const calculateDiscountedPrice = (price: number, discount: number) => {
    if (!discount) return price;
    return price - (price * discount / 100);
  };
  return (
    <div
      style={{
        backgroundImage: "url(/bg.jpg)"
      }}
      className='w-full h-full bg-center bg-no-repeat grid grid-cols-3 gap-3 '>
      <div className="col-span-1 h-full overflow-y-scroll scrollbar-hide p-3">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">Product List</h2>
        <div className="w-full mt-3 h-full">
          <ScrollArea className='w-full max-h-[83%] mb-3'>
            {
              payment?.PrductPayment.map(e => {
                return <div key={e.id} className='w-full p-3 glass-bg-2  mt-3 flex shadow-2xl'>
                  <div className='w-2/3 mx-auto'>
                    <img src={e.product.primaryImg} alt="img" srcSet="" className=' w-1/2' />
                    <p className='font-sans font-semibold text-amber-100'>{e.product.name}</p>
                  </div>
                  <div className='w-full flex justify-around items-center space-y-3 flex-col'>
                    <label className='text-xl font-sans font-bold text-slate-200'>Quantity</label>
                    <input value={e.quantity} className='w-[80px] text-center text-slate-50 bg-red-500 rounded-3xl' type="text" name="" id="" />
                    <p className='text-center my-3 font-sans font-semibold text-amber-100'>{calculateDiscountedPrice(e.product.price, e.product.discount as number) * e.quantity}$</p>
                  </div>
                </div>
              })
            }
          </ScrollArea>
          <div className='w-fit glass-bg-2 p-3 flex space-x-3 mx-auto'>
            <Button>Total Price: {payment?.PrductPayment.reduce((value = 0, { finalPrice }) => value + finalPrice, 0)}$</Button>
            <Button>T Total Product: {payment?.PrductPayment.length}</Button>
          </div>
        </div>
      </div>
      <div className='col-span-2 min-h-full flex justify-around items-start mt-10'>
        <div className="w-[80%] mx-auto p-6 glass-bg-2 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">Shipping Address</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-100" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-100" htmlFor="fullName">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-100" htmlFor="fullName">Your Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-100" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-100" htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-100" htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-100" htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-100" htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page