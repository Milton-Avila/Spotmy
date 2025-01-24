'use client'

// React
import React, { useContext, useEffect, useState } from "react"
import Image from 'next/image'

// UI
import { IoMdAddCircleOutline, IoMdCheckmarkCircle } from "react-icons/io";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

// Local
import { PlayingSongContext } from '@/contexts/playingSong';
import { BiVolume, BiVolumeFull, BiVolumeLow } from "react-icons/bi";

export default function RightMenu() {
  const playingSong = useContext(PlayingSongContext);

  // Verifica se o contexto não é nulo
  if (!playingSong) {
    return null;
  }

  const { songInfo } = playingSong;
  const [songLoaded, setSongLoaded] = useState<boolean>(songInfo.songLoaded);
  const [volume, setVolume] = useState<number>(songInfo.song?.volume || 1);
  const [song, setSong] = useState<HTMLAudioElement>(songInfo.song!)

  const handleMuteVolume = () => {
    console.log(song)
    // if (song.volume != 0) {
    //   song.volume = 0.7
    // } else {
    //   song.volume = 0
    // }
  }

  useEffect(() => {
    if (songLoaded) {
      const handleVolumeChange = () => {
        setVolume(songInfo.song!.volume);
      };
      
      songInfo.song!.addEventListener('volumechange', handleVolumeChange);
      console.log('loudou')
      
      return () => {
        songInfo.song?.removeEventListener('volumechange', handleVolumeChange);
      };
    } else {
      console.log('Música ainda não carregada.');
    }
  }, [playingSong]);


  return (
    <>

      <div className="absolute flex items-center max-w-[400px] overflow-hidde right-0 pr-[30px]">

        <div onClick={handleMuteVolume}>
        {
          volume == 0
            ? <BiVolume className="my-auto absolute right-0 ml-[14px] mt-[-4px] size-[20px] text-stone-400 hover:text-stone-200 hover:cursor-pointer " />
            : volume < 50
            ? <BiVolumeLow className="my-auto absolute right-0 ml-[14px] mt-[-4px] size-[20px] text-stone-400 hover:text-stone-200 hover:cursor-pointer " />
            : <BiVolumeFull className="my-auto absolute right-0 ml-[14px] mt-[-4px] size-[20px] text-stone-400 hover:text-stone-200 hover:cursor-pointer" />
        }
        </div>

        <Slider
              // value={[songCur]}
              // defaultValue={[songCur]}
              // onValueChange={(even: any) => handleChangeCurrentHold(even)}
              // onClick={() => handleChangeCurrentClick()}
              // max={100}
              step={1}
              className="mt-[3px] w-[30px] mx-[8px]" />
        
      </div>
      <div key={`${songInfo.song?.src}`}></div>

    </>
  )
}