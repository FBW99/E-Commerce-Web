import React from 'react'

const Subscribe = () => {
  return (
    <div className='py-10 bg-primary text-white mb-10'>
        <h3 className='text-3xl font-bold text-white text-center'>Get Notified About New Products</h3>
        <div className='flex justify-center gap-4 mt-1'>
            <input type="text" placeholder='Enter your email' className='w-[300px] md:w-[500px] rounded-1xl border border-gray-300
            bg-white px-4 py-2 text-gray-800
            placeholder-gray-400
            focus:border-primary focus:outline-none ' />
        </div>
    </div>
  )
}

export default Subscribe