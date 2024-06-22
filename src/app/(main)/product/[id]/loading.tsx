// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => (
    <div className="max-w-6xl mx-auto p-4 animate-pulse bg-gradient-to-b from-rose-900 via-slate-700 to-black">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <div className="w-full h-64 bg-gradient-to-b from-rose-900 via-slate-700 to-black"></div>
        <div className="grid grid-cols-4 gap-2 mt-2">
          <div className="w-full h-28 bg-gradient-to-b from-rose-900 via-slate-700 to-black"></div>
          <div className="w-full h-28 bg-gradient-to-b from-rose-900 via-slate-700 to-black"></div>
          <div className="w-full h-28 bg-gradient-to-b from-rose-900 via-slate-700 to-black"></div>
          <div className="w-full h-28 bg-gradient-to-b from-rose-900 via-slate-700 to-black"></div>
        </div>
      </div>
      <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
        <div className="w-3/4 h-8 bg-gradient-to-b from-rose-900 via-slate-700 to-black mb-2"></div>
        <div className="w-full h-4 bg-gradient-to-b from-rose-900 via-slate-700 to-black mb-4"></div>
        <div className="w-1/2 h-8 bg-gradient-to-b from-rose-900 via-slate-700 to-black mb-4"></div>
        <div className="w-32 h-10 bg-blue-200 rounded"></div>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
