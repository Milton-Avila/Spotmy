'use client'

import React, { useEffect, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { FaPlus } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { BsFillSkipStartFill } from "react-icons/bs"
import { LuRepeat, LuShuffle } from "react-icons/lu"
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa"

export default function PlayMainMenu() {
  const [playing, setPlaying] = useState('pause')
  const [timeLine, setTimeline] = useState('0')
  const [shuffleEnableOn, setShuffleEnabelOn] = useState(true)
  const [shuffleOn, setShuffleOn] = useState('false')
  const [repeatEnableOn, setRepeatEnableOn] = useState(true)
  const [repeatOn, setRepeatOn] = useState(false)

  return(
    <>
    
      <div className="grid columns-2 bottom-0">

        <div className="flex ">
        
        
        </div>

      </div>
    
    </>
  )
}