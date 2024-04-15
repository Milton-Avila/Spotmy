'use client'

import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BiSearch, BiSolidSearch } from "react-icons/bi";
import StyleInjector from "@/components/structures/styleInjector";

export default function TopMenu() {
  const [selected, setSelected] = useState('home');

  return (
    <>

      <div className="rounded-lg bg-[#121212] px-[2%]">
        <div className="flex flex-col py-3 gap-y-[6px]">
          
          <StyleInjector style={'' + (selected=='search' ? ' hover:cursor-pointer' : ' hover:cursor-default')}>
            <Button variant='ghost' onClick={() => (setSelected('home'))} className={"justify-start gap-x-2 duration-300 " + (selected=='search' ? 'hover:text-gray-200' : 'text-gray-200')}>
              {selected=='home' ? (<GoHomeFill className="text-[26px]"/>) : (<GoHome className="text-[26px]"/>)} <Label className="ml-2 font-bold text-[16px]"> Home </Label>
            </Button>
          </StyleInjector>
            
          <StyleInjector style={'' + (selected=='home' ? ' hover:cursor-pointer' : ' hover:cursor-default')}>
            <Button variant='ghost' onClick={() => (setSelected('search'))} className={"justify-start gap-x-2 duration-300 " + (selected=='home' ? 'hover:text-gray-200' : 'text-gray-200')}>
              {selected=='search' ? (<BiSolidSearch className="text-[26px]"/>) : (<BiSearch className="text-[26px]"/>)} <Label className="ml-2 font-bold text-[16px]"> Search </Label>
            </Button>
          </StyleInjector>

        </div>
      </div>

    </>
  )
}