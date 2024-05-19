'use client'

import React, { useContext, useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import Image from "next/image";
import { songsData } from "@public/data/songsData";
import { PlayingSongContext } from "@/contexts/playingSong";
import { songInterface } from "@/interfaces/songsDataInterface";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function ScrollDownViewer() {
  const playingSong = useContext<songInterface>(PlayingSongContext)
  const [cover, setCover] = useState<string>("/data/" + songsData[playingSong.albumId].src + "cover.jpg");

  return (
    <>

      <div className="h-full">

        <img
          src={cover}
          alt="Song Cover"
          className="rounded-md w-[100%] mb-3"
        />

        

        <div className="flex h-10">

          <div className="grid mb-auto grid-flow-row gap-y-1 overflow-x-clip whitespace-nowrap">
            <Label className="text-stone-200 hover:underline text-[20px] cursor-pointer font-extrabold">{playingSong.name}</Label>
            <Label className="text-stone-400 hover:underline text-[16px] cursor-pointer leading-3">{songsData[playingSong.albumId].artist}</Label>
          </div>

          <div className="flex absolute right-6 bg-gradient-to-r from-transparent to-[45%] to-[#121212] w-12 h-14">
            <IoMdAddCircleOutline className="ml-auto size-[24px] text-stone-500 hover:text-stone-200 hover:cursor-pointer my-auto"/> 
          </div>

        </div>

      </div>

    </>
  )
}