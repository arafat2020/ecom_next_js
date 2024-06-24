/* eslint-disable @next/next/no-img-element */
import Product from '@/app/(main)/product/[id]/page'
import { serverClient } from '@/app/_trpc/serverClient'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

async function page({ params }: { params: { id: string } }) {
  const payment = await serverClient.getCreatedPayment({
    id: params.id
  })
  return (
    <div
      style={{
        backgroundImage: "url(/bg.jpg)"
      }}
      className='w-full h-full bg-center bg-no-repeat grid grid-cols-2 gap-3 '>
      <div className="col-span-1 glass-bg-1 h-full overflow-y-scroll scrollbar-hide p-3">
      <h1 className="text-center font-sans font-bold text-3xl text-slate-100 mt-2 p-2 ">
        Product List
      </h1>
      <div className="w-full mt-3 h-full">
        <div className="w-full h-[85%] p-3 overflow-y-scroll glass-bg-1">
          {payment?.PrductPayment.map((e) => (
             <div
             key={e.id}
             className="w-full bg-gradient-to-r from-gray-800 to-gray-700 flex space-x-3 my-3 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
           >
             <div className="w-1/3">
               <img
                 src={e.product.primaryImg}
                 alt="img"
                 className="w-full rounded-lg object-cover drop-shadow-md"
               />
             </div>
             <div className="w-2/3 font-sans text-slate-100 glass-bg-1 p-2">
               <p className="font-bold text-2xl mb-2">{e.product.name}</p>
               <p className="font-extrabold text-xl mb-1">
                 Combine Price: {e.finalPrice}$
               </p>
               <p className="font-medium text-lg">Quantity: {e.quantity}</p>
             </div>
           </div>
          ))}
        </div>
        <div className="w-full flex justify-around my-3">
          <p className="font-sans p-2 bg-cyan-100 text-xl rounded-lg font-semibold text-slate-700">
            Total Price: {payment?.PrductPayment.reduce((value = 0, { finalPrice }) => value + finalPrice, 0)}$
          </p>
          <p className="font-sans p-2 bg-cyan-100 text-xl rounded-lg font-semibold text-slate-700">
            Total Product: {payment?.PrductPayment.length}
          </p>
        </div>
      </div>
    </div>
      <div className='col-span-1 glass-bg-1 min-h-full p-3 flex justify-around items-center'>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Shipping Address</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">Your Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="city">City</label>
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
            <label className="block text-sm font-medium text-gray-700" htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="zipCode">Zip Code</label>
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
          <label className="block text-sm font-medium text-gray-700" htmlFor="country">Country</label>
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