'use client'

import React, { useEffect, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { FaPlus } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { BsFillSkipStartFill } from "react-icons/bs"
import { LuRepeat, LuShuffle } from "react-icons/lu"
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa"
import { Label } from "@/components/ui/label";

export default function PlayMenu() {
  const [playing, setPlaying] = useState('pause')
  const [timeLine, setTimeline] = useState('0')
  const [shuffleEnableOn, setShuffleEnabelOn] = useState(true) // Turn to False
  const [shuffleOn, setShuffleOn] = useState('false')
  const [repeatEnableOn, setRepeatEnableOn] = useState(true)  // Turn to False
  const [repeatOn, setRepeatOn] = useState(false)

  return(
    <>
        <div className="flex flex-grow">
          <div className="grid columns-2 w-full">

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-5 gap-x-[6px]">

                <div className="text-white duration-100 h-2">
                  {
                    !shuffleEnableOn 
                    ? <LuShuffle className="text-[19px] duration-100 mt-[6px] mx-auto text-stone-700"/>
                    : shuffleOn == 'false'
                    ? <LuShuffle onClick={() => setShuffleOn('normal')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:text-white hover:cursor-pointer text-stone-400"/>
                    : shuffleOn == 'normal'
                    ? <div className="text-green-400"><LuShuffle onClick={() => setShuffleOn('smart')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer"/> <TbPointFilled className="size-[10px] mx-auto"/></div>
                    : <div className="text-green-400"><LuShuffle onClick={() => setShuffleOn('false')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer"/> <FaPlus className="size-[7px] m-auto"/></div>
                  }
                </div>

                <div className="text-white duration-100">
                  {
                    <BsFillSkipStartFill className="text-stone-400 hover:text-white text-[26px] duration-100 hover:cursor-pointer mt-[2px]"/>
                  }
                </div>

                <div className="text-white duration-100">
                  {
                    playing=='play' ? 
                    (<FaPlayCircle onClick={() => (playing=='play' ? (setPlaying('pause')) : (setPlaying('play')))} className="text-[34px] hover:scale-[110%] duration-100 hover:cursor-pointer"/>) : 
                    (<FaPauseCircle onClick={() => (playing=='play' ? (setPlaying('pause')) : (setPlaying('play')))} className="text-[34px] hover:scale-[110%] duration-100 hover:cursor-pointer"/>)
                  }
                </div>
                
                <div className="text-white duration-100 align-middle">
                  {
                    <BsFillSkipStartFill className="text-stone-400 hover:text-white rotate-[180deg] text-[26px] duration-100 hover:cursor-pointer float-end mt-[2px]"/>
                  }
                </div>

                <div className="text-white duration-100 h-2">
                  {
                    !repeatEnableOn 
                    ? <LuRepeat className="text-[19px] duration-100 mt-[6px] mx-auto text-stone-700"/>
                    : repeatOn
                    ? <div className="text-green-400"><LuRepeat onClick={() => setRepeatOn(false)} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer"/> <TbPointFilled className="mt-[1px] size-[10px] mx-auto"/></div>
                    : <LuRepeat onClick={() => setRepeatOn(true)} className="text-[19px] duration-100 mt-[6px] mx-auto hover:text-white hover:cursor-pointer text-stone-400"/>
                  }
                </div>
              </div>

            </div>

            <div className="flex justify-center items-start">
              <Label className="flex mr-2 text-stone-500">0:00</Label>

              <Slider defaultValue={[0]} max={100} step={1} className="flex mt-2 min-w-[350px] w-[34vw]" />

              <Label className="flex ml-2 text-stone-500">3:12</Label>
            </div>

          </div>
        </div>
    
    </>
  )
}