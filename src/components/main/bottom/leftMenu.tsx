'use client'

import React, { useContext, useState } from "react"
import { Label } from "@/components/ui/label";
import { IoMdAddCircleOutline } from "react-icons/io";
import { PlayingSongContext } from "@/contexts/playingSong";
import StyleInjector from "@/components/structures/styleInjector";

export default function LeftMenu() {
  const playingSong = useContext(PlayingSongContext);

  return(
    <>
    
      <div className="grid columns-2 bottom-0">

        <div className="flex ">
          <div className="w-20 h-20 -mt-[7px] -ml-1">

            <img
              src={playingSong.coverSrc}
              alt="Song cover"
              className="scale-[0.7] rounded-sm"
            />

          </div>

          <StyleInjector style="underline cursor-pointer">
            <div className="grid mb-auto mt-5 grid-flow-row gap-y-1">
              <Label className="text-stone-200">{playingSong.name}</Label>
              <Label className="text-stone-500">{playingSong.artist}</Label>
            </div>
          </StyleInjector>

          <IoMdAddCircleOutline className="my-auto ml-4 size-5 text-stone-500 hover:text-stone-200 hover:cursor-pointer"/>
        </div>

      </div>
    
    </>
  )
}