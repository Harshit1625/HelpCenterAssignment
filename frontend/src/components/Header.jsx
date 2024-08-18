import React from 'react'

const Header = () => {
  return (
    <div className='pl-[10vw] pr-[10vw] p-10 bg-black'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center justify-between'>
            <img src='/logo.svg' className='h-[30px] w-[30px]' />
            <h1 className='font-bold text-[15px]'>Abstract | Help Center</h1>
        </div>
        <div className='p-2 border rounded-lg border-white'>
        <h1 className='font-bold text-[12px]'>Submit a Request</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
