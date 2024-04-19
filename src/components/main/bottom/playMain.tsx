'use client'

import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { FaPlus } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { BsFillSkipStartFill } from "react-icons/bs";
import { LuRepeat, LuShuffle } from "react-icons/lu";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { PlayingSongContext } from "@/contexts/playingSong";

export default function PlayMenu() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [songDur, setSongDur] = useState<number>(0);                    // Change default value
  const [songCur, setsongCur] = useState<number>(0);                       // Change default value
  const [changingCurrent, setChangingCurrent] = useState<boolean>(false);
  const [selectedCur, setSelectedCur] = useState<number>(0);
  const [shuffleEnableOn, setShuffleEnabelOn] = useState<boolean>(true);  // Turn to False
  const [shuffleOn, setShuffleOn] = useState<string>('false');
  const [repeatEnableOn, setRepeatEnableOn] = useState<boolean>(true);    // Turn to False
  const [repeatOn, setRepeatOn] = useState<boolean>(false);
  const [song, setSong] = useState<HTMLAudioElement|null>(null);
  const playingSong = useContext(PlayingSongContext);
  let barRest = Math.round(songCur%60);

  const handleSong = async (src: string) => {
    try {
      const songModule = await import("@/data/songs/snuff.mp3");
  
      if (typeof songModule.default === "string") {
        setSong(new Audio(songModule.default));

      } else {
        console.error("Song url error.");

      }
    } catch (error) {
      console.error("Audio error: ", error);
    }
  };

  const handleChangeCurrentHold = (even: any) => {
    setsongCur(even)
    setSelectedCur(even)
    if (!changingCurrent) {
      setChangingCurrent(true)
    }
  }

  const handleChangeCurrentClick = () => {
    if (song != null) {
      song.currentTime = selectedCur;
    }
    setChangingCurrent(false)
  }

  if (song != null) {
    song.addEventListener('loadedmetadata', () => {
      const durationInSeconds = song.duration;
      setSongDur(durationInSeconds)
    });
    
    song.addEventListener('timeupdate', () => {
      if (!changingCurrent) {
        let currentTimeInSeconds = song.currentTime;
        setsongCur(currentTimeInSeconds)
      }
    });
  }
  
  useEffect(() => {
    handleSong(playingSong.src);
  }, [playingSong.src]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    song?.play();
  }

  const handlePause = () => {
    setIsPlaying(!isPlaying)
    song?.pause()
  }

  const handleEnd = () => {
    setIsPlaying(false)
    if (song != null) {
      song.pause()
      song.currentTime = 0
    }
  }

  return(
    <>
        <div className="flex flex-grow select-none">
          <div className="grid columns-2 w-full">

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-5 gap-x-[6px]">

                <div className="text-white duration-100 h-2">
                  {
                    !shuffleEnableOn 
                    ? <LuShuffle className="text-[19px] duration-100 mt-[6px] mx-auto text-stone-700"/>
                    : shuffleOn == 'false'
                    ? <LuShuffle onClick={() => setShuffleOn('normal')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:text-white hover:cursor-pointer text-stone-400"/>
                    : shuffleOn == 'normal'
                    ? <div className="text-green-400"><LuShuffle onClick={() => setShuffleOn('smart')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer"/> <TbPointFilled className="size-[10px] m-auto"/></div>
                    : <div className="text-green-400"><LuShuffle onClick={() => setShuffleOn('false')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer"/> <FaPlus className="size-[7px] mt-[2px] m-auto"/></div>
                  }
                </div>

                <div className="text-white duration-100">
                  {
                    <BsFillSkipStartFill className="text-stone-400 hover:text-white text-[26px] duration-100 hover:cursor-pointer mt-[2px]"/>
                  }
                </div>

                <div className="text-white duration-100">
                  {
                    !isPlaying ? 
                    (<FaPlayCircle onClick={handlePlay} className="text-[34px] hover:scale-[110%] duration-100 hover:cursor-pointer"/>) : 
                    (<FaPauseCircle onClick={handlePause} className="text-[34px] hover:scale-[110%] duration-100 hover:cursor-pointer"/>)
                  }
                </div>
                
                <div className="text-white duration-100 align-middle">
                  {
                    <BsFillSkipStartFill className="text-stone-400 hover:text-white rotate-[180deg] text-[26px] duration-100 hover:cursor-pointer float-end mt-[2px]"/>
                  }
                </div>

                <div className="text-white duration-100 h-2">
                  {
                    !repeatEnableOn 
                    ? <LuRepeat className="text-[19px] duration-100 mt-[6px] mx-auto text-stone-700"/>
                    : repeatOn
                    ? <div className="text-green-400"><LuRepeat onClick={() => setRepeatOn(false)} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer"/> <TbPointFilled className="mt-[1px] size-[10px] mx-auto"/></div>
                    : <LuRepeat onClick={() => setRepeatOn(true)} className="text-[19px] duration-100 mt-[6px] mx-auto hover:text-white hover:cursor-pointer text-stone-400"/>
                  }
                </div>
              </div>

            </div>

            <div className="flex justify-center items-start">
              
              <Label className="flex mr-[10px] text-stone-500 w-[29px] justify-end">{Math.floor(songCur/60) + ":" + (barRest<10 ? `0${barRest}` : barRest)}</Label>

              <Slider
                value={[songCur]}
                defaultValue={[songCur]}
                onValueChange={(even: any) => {handleChangeCurrentHold(even)}}
                onClick={() => {handleChangeCurrentClick()}}
                max={songDur}
                step={1}
                className="flex mt-[5px] min-w-[350px] w-[34vw]"/>

              <Label className="flex ml-[10px] text-stone-500">{Math.floor(songDur/60) + ":" + (songDur<10 ? `0${Math.round(songDur%60)}` : Math.round(songDur%60))}</Label>
            </div>

          </div>
        </div>
    
    </>
  )
}