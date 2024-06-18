'use client'

import InterfaceMain from "@/components/main/main/interface";
import InterfaceRight from "@/components/main/right/interface";
import InterfaceLeft from "@/components/main/left/interface";
import InterfaceBottom from "@/components/main/bottom/interface";
import { PlayingSongContext } from "@/contexts/playingSong";
import { songsData } from "@public/data/songsData";
import React from "react";

export default function Home() {

  return (

    <PlayingSongContext.Provider value={songsData[1].songs[1]}>

      <div className='h-screen flex flex-col'>
        <div className="grid grid-cols-24 w-screen h-full gap-2 px-2 overflow-hidden">

          <InterfaceLeft/>

          <InterfaceMain/>

          <InterfaceRight/>
        </div>

        <InterfaceBottom/>
      </div>

    </PlayingSongContext.Provider>

  );
}