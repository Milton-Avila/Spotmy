'use client'

import React, { useEffect, useState } from "react"
import { Label } from "@/components/ui/label";

export default function PlayMainMenu() {
  const [playing, setPlaying] = useState('pause')

  return(
    <>
    
      <div className="grid columns-2 bottom-0">

        <div className="flex ">
        
          <Label className="text-white"></Label>

        </div>

      </div>
    
    </>
  )
}