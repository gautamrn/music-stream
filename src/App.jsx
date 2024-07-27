import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';

const App = () => {

  const {audioRef, track} = useContext(PlayerContext);

  return(
    <div className='h-screen bg-zinc-900'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
    </div>
  )
}

export default App;