import React from 'react';
import {Route, Routes} from 'react-router-dom';
import DisplayHome from './DisplayHome';

const Display = () => {
  return(
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-zinc-800 text-pink-600 overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome />} />
        </Routes>
    </div>
  )
}

export default Display;