import { createContext, useEffect, useRef, useState } from "react";
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

    const playId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
    }

    useEffect(() => {
        setTimeout(() =>{
            audioRef.current.ontimeupdate = () => {

                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100))+"%";

                setTime({
                    currentTime:{
                        second:Math.floor(audioRef.current.currentTime % 60),
                        minute:Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second:Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    })

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
        pause,
        playId
    }

    return(
        <PlayerContext.Provider value={contextVal}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;