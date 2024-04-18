'use client'

import React from "react"
import LeftMenu from "./leftMenu";
import PlayMain from "./playMain";

export default function InterfaceBottom() {

  return (
    <>

      <div className="flex h-[82px] px-2">

        <LeftMenu/>
        
        <PlayMain/>
          
      </div>

    </>
  )
}