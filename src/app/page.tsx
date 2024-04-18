'use client'

import InterfaceLeft from "@/components/main/left/interface";
import InterfaceRight from "@/components/main/right/interface";
import InterfaceMain from "@/components/main/main/interface";
import InterfaceBottom from "@/components/main/bottom/interface";
import { PlayingSongContext } from "@/contexts/playingSong";
import { songs } from "@/data/songsData";

export default function Home() {

  return (

    <PlayingSongContext.Provider value={songs[0]}>

      <div className='h-screen flex flex-col'>
        
        <div className="grid grid-cols-18 w-screen h-full gap-2 px-2">

          <InterfaceLeft/>

          <InterfaceMain/>

          <InterfaceRight/>
        </div>

        <InterfaceBottom/>
      </div>

    </PlayingSongContext.Provider>

  );
}
