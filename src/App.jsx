import React from 'react';
import Sidebar from './components/Sidebar';

const App = () => {
  return(
    <div className='h-screen bg-zinc-900'>
      <div className='h-[90%] flex'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App;