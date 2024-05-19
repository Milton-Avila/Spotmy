'use client'

import Image from 'next/image'
import React, { useContext, useEffect, useState } from "react"
import { Label } from "@/components/ui/label";
import { IoMdAddCircleOutline } from "react-icons/io";
import { songsData } from '@public/data/songsData';
import { songInterface } from '@/interfaces/songsDataInterface';
import { PlayingSongContext } from '@/contexts/playingSong';

export default function LeftMenu() {
  const playingSong = useContext<songInterface>(PlayingSongContext);
  const [cover, setCover] = useState<string>("/data/" + songsData[playingSong.albumId].src + "cover.jpg");

  return(
    <>
    
      <div className="grid columns-2 bottom-0 gap-x-[30px] absolute">

        <div className="flex ">
          <div className="w-20 h-20 -mt-[7px] -ml-1">

            <img
              src={cover}
              alt="Song Cover"
              className="scale-[0.7] rounded-md"
            />

          </div>

          <div className="grid mb-auto mt-5 grid-flow-row gap-y-1 max-w-[20vw] overflow-x-hidden whitespace-nowrap">
            <Label className="text-stone-200 hover:underline cursor-pointer">{playingSong.name}</Label>
            <Label className="text-stone-400 hover:underline text-xs cursor-pointer">{songsData[playingSong.albumId].artist}</Label>
          </div>

          <IoMdAddCircleOutline className="my-auto ml-4 size-5 text-stone-500 hover:text-stone-200 hover:cursor-pointer"/>
        </div>

      </div>
    
    </>
  )
}