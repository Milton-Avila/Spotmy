'use client'

import React from "react"
import PlayLeftMenu from "../sub/playLeftMenu";
import PlayMainMenu from "../sub/playMainMenu";


export default function InterfaceBottom() {

  return (
    <>

      <div className="h-[95px]">

        <PlayLeftMenu/>
        
        <PlayMainMenu/>
      
      </div>

    </>
  )
}