'use client'

import React, { useContext, useEffect, useState } from "react";
import StyleInjector from "@/components/structures/styleInjector";
import { Label } from "../../ui/label"
import { RxDotsHorizontal } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { PlayingSongContext } from '@/contexts/playingSong';
import { songInterface } from "@/interfaces/songsDataInterface";
import { songsData } from "@public/data/songsData";


export default function SongHeader() {
  const playingSong = useContext<songInterface>(PlayingSongContext);
  const [songName, setSongName] = useState<string>(songsData[playingSong.albumId].name)
  const [albumNameHover, setAlbumNameHover] = useState<boolean>(false);

  useEffect(()=>{
    if (albumNameHover) {
      let timeoutId = setTimeout(() => {
        setAlbumNameHover(false);
      }, 8000);
    
      return () => clearTimeout(timeoutId);
    }
  }, [albumNameHover])

  return (
    <>

      <div className="h-[40px] pt-[12px] mb-4">

        <div className="max-w-[87%] overflow-hidden whitespace-nowrap marquee-conteiner">
          <div className={`inline-block ${albumNameHover && 'animate-marqueeOnce'}`} onMouseEnter={()=>{setAlbumNameHover(true)}}>

            <Label className="hover:underline cursor-pointer text-base font-bold"> {songName} </Label>

          </div>
        </div>

        <div className="absolute right-6 top-8 pl-4 grid-cols-2 grid gap-x-4 bg-gradient-to-r from-transparent to-[26%] to-[#121212]">
          
          <StyleInjector style="size-5 text-stone-400 hover:text-white cursor-pointer">
            <RxDotsHorizontal/>
            <IoCloseSharp/>
          </StyleInjector>
          
        </div>

      </div>

    </>
  )
}