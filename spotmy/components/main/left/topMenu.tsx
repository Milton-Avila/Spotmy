'use client'

import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BiSearch, BiSolidSearch } from "react-icons/bi";

export default function TopMenu() {
  const [selected, setSelected] = useState('home');

  return (
    <>

      <div className="rounded-lg bg-[#121212] px-[2%]">

        <div className="flex flex-col py-2 gap-y-1">
          <Button variant='ghost' onClick={() => (setSelected('home'))} className={"text-[18px] justify-start gap-x-2 duration-300 " + (selected=='search' ? 'hover:text-gray-200' : 'text-gray-200')}>
            {selected=='home' ? (<GoHomeFill className="text-[26px]"/>) : (<GoHome className="text-[26px]"/>)} <Label className="ml-2 font-bold"> Home </Label>
          </Button>
          
          
          <Button variant='ghost' onClick={() => (setSelected('search'))} className={"text-[18px] justify-start gap-x-2 duration-300 " + (selected=='home' ? 'hover:text-gray-200' : 'text-gray-200')}>
            {selected=='search' ? (<BiSolidSearch className="text-[26px]"/>) : (<BiSearch className="text-[26px]"/>)} <Label className="ml-2 font-bold"> Search </Label>
          </Button>
        </div>

      </div>

    </>
  )
}