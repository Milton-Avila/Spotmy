'use client'

import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import StyleInjector from "@/components/structures/styleInjector";

import { LuLibrary } from "react-icons/lu";
import { HiPlus } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";

export default function ScrollDownMenu() {

  return (
    <>

      <div className="rounded-lg bg-[#121212] px-[2%] py-3 h-full">

        <StyleInjector style="cursor-pointer">
          <Button variant='ghost' className="duration-300 justify-start gap-x-2 hover:text-gray-200" >
            <LuLibrary className="text-[28px]"/> <Label className=" font-bold text-[16px]"> Your Library </Label>
          </Button>
        </StyleInjector>

        <div className="flex ml-auto gap-x-3 mt-[-31px] mr-2 w-min">
          <StyleInjector style="m-auto size-[22px] text-stone-400 cursor-pointer hover:text-white">

            <div className="flex hover:bg-[#1a1919] rounded-full size-[32px]">
              <HiPlus className=" duration-300"/>
            </div>

            <div className="flex hover:bg-[#1a1919] rounded-full size-[32px]">
              <HiArrowSmallRight className=" duration-300"/>
            </div>

          </StyleInjector>
        </div>

      </div>

    </>
  )
}