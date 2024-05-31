import React from 'react'

function Card() {
  return <div className="col-span-1 bg-zinc-800 text-white p-4 rounded-lg">
    <h2 className="text-lg font-semibold">Performance</h2>
    <div className="flex justify-between mt-4">
      <div className='bg-gradient-to-tr from-slate-950 via-slate-800 to-slate-700 p-2 rounded-lg'>
        <p className="text-2xl font-bold">76%</p>
        <p className="text-sm">Income</p>
      </div>
      <div className='bg-gradient-to-tr from-slate-950 via-slate-800 to-slate-700 p-2 rounded-lg'>
        <p className="text-2xl font-bold">44%</p>
        <p className="text-sm">Speedings</p>
      </div>
    </div>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        Spending course was taken
      </li>
      <li className="flex items-center">
        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
        Deposit programs was setup
      </li>
      <li className="flex items-center">
        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
        Cashback program activated
      </li>
    </ul>
  </div>

}

function Admin() {
  return (
    <div className="flex-grow flex flex-col h-full p-4 space-y-2">
      <div className='grid grid-cols-3 gap-3'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="bg-white dark:bg-zinc-900 p-2 rounded-lg flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="text-red-500 font-semibold">Activity</button>
            <button className="text-zinc-500">Clicks</button>
            <button className="text-zinc-500">Sales</button>
          </div>
          <div>
            <button className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-lg">Week</button>
          </div>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Your undefined updates every <span className="font-semibold">3 hours</span></p>
          <div className="flex justify-center items-center mt-4">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-2 rounded-full">
                12,560
              </div>
              <img src="https://placehold.co/300x100" alt="Graph" className="w-full h-24 object-cover rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between mt-4 text-zinc-500 dark:text-zinc-400">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Engagement</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">General statistic of user engagement processes.</p>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg text-center">
            <div className="text-red-500 mb-2">🔥</div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">This Day</p>
            <p className="text-2xl font-bold">133</p>
            <p className="text-green-500">↑</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg text-center">
            <div className="text-red-500 mb-2">📅</div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">This Week</p>
            <p className="text-2xl font-bold">471</p>
            <p className="text-red-500">↓</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg text-center">
            <div className="text-red-500 mb-2">📅</div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">This Month</p>
            <p className="text-2xl font-bold">929</p>
            <p className="text-green-500">↑</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg text-center">
            <div className="text-red-500 mb-2">⏳</div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Pending</p>
            <p className="text-2xl font-bold">233</p>
            <p className="text-green-500">↑</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin