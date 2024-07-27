import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBar = useRef();
    const seekBg = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayerStatus(false);
    }

    const contextVal = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playerStatus, 
        setPlayerStatus,
        time, 
        setTime,
        play,
        pause
    }

    return(
        <PlayerContext.Provider value={contextVal}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;