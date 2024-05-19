'use client'

import React, { useState } from "react";
import StyleInjector from "@/components/structures/styleInjector";
import { Label } from "../../ui/label"
import { RxDotsHorizontal } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function SongHeader() {

  return (
    <>

      <div className="h-[40px] pt-[12px] mb-4">

        <Label className="flex ml-[18px] text-base font-bold max-w-[87%] max-h-7 overflow-hidden hover:underline cursor-pointer">Mardy Bumm but there is something else in the end</Label>

        <div className="absolute right-6 top-8 grid-cols-2 grid gap-x-4 bg-gradient-to-r from-transparent to-20% to-[#121212] pl-4">
          
          <StyleInjector style="size-5 text-stone-400">
            <RxDotsHorizontal/>
            <IoClose/>
          </StyleInjector>
          
        </div>

      </div>

    </>
  )
}