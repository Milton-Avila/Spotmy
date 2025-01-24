'use client'

// React
import React, { useContext, useEffect, useState } from "react";

// UI
import StyleInjector from "@/components/structures/styleInjector";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BiSearch, BiSolidSearch } from "react-icons/bi";

// UseContext
import { PlayingSongContext } from "@/contexts/playingSong";

export default function TopMenu() {
  const playingSong = useContext(PlayingSongContext);
  const [page, setPage] = useState('home');

  const handlePageChange = (page: string) => {
    setPage(page);
    playingSong!.interface.page = page;
  }

  useEffect(() => {
    console.log(1)
  }, [playingSong?.interface.page])

  return (
    <>

      <div className="rounded-lg bg-[#121212] px-[2%]">
        <div className="flex flex-col py-3 gap-y-[6px]">

          <StyleInjector style={'' + (page == 'search' ? ' cursor-pointer' : ' cursor-default')}>
            <Button variant='ghost' onClick={() => (handlePageChange('home'))} className={"justify-start gap-x-2 duration-300" + (page == 'search' ? ' hover:text-gray-200' : ' text-gray-200')}>
              {page == 'home' ? (<GoHomeFill className="text-[26px]" />) : (<GoHome className="text-[26px]" />)} <Label className="ml-2 font-bold text-[16px]"> Home </Label>
            </Button>
          </StyleInjector>

          <StyleInjector style={'' + (page == 'home' ? '  cursor-pointer' : ' cursor-default')}>
            <Button variant='ghost' onClick={() => (handlePageChange('search'))} className={"justify-start gap-x-2 duration-300" + (page == 'home' ? ' hover:text-gray-200' : ' text-gray-200')}>
              {page == 'search' ? (<BiSolidSearch className="text-[26px]" />) : (<BiSearch className="text-[26px]" />)} <Label className="ml-2 font-bold text-[16px]"> Search </Label>
            </Button>
          </StyleInjector>

        </div>
      </div>

    </>
  )
}