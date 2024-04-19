'use client'

import React, { useEffect, useState } from "react"
import { Label } from "@/components/ui/label";
import cover from "@/data/imgs/snuff_cover.jpg"

export default function PlayMainMenu() {
  const [playing, setPlaying] = useState('pause')
  // let cover = import("@/data/imgs/snuff_cover.jpg")

  return(
    <>
    
      <div className="grid columns-2 bottom-0">

        <div className="flex ">
        
          {/* <img src={cover} alt="snuff cover" /> */}

        </div>

      </div>
    
    </>
  )
}