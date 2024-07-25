import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return(
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img className='w-8 bg-zinc-900 p-2 rounded-2x1 cursor-pointer' src={assets.arrow_left} alt="" />
                <img className='w-8 bg-zinc-900 p-2 rounded-2x1 cursor-pointer' src={assets.arrow_right} alt="" />
            </div>

            <div className='flex items-center gap-4'>
              <p className='bg-pink-400 text-zinc-900 w-7 h-7 rounded-full flex items-center justify-center'>G</p>
            </div>
        </div>

        <div className='flex items-center gap-2 mt-4'>
          <p className='bg-white px-4 py-1 rounded-2xl cursor-pointer'>All</p>
          <p className='bg-zinc-900 px-4 py-1 rounded 2xl cursor-pointer'>Music</p>
          <p className='bg-zinc-900 px-4 py-1 rounded 2xl cursor-pointer'>Podcasts</p>
        </div>
    </>
  )
}

export default Navbar;