'use client'

// React
import React from "react"

// Local
import TopMenu from "./topMenu"
import ScrollDownMenu from "./scrollDownMenu"

export default function InterfaceLeft() {
  return (
    <>

      <div className="flex flex-col col-span-4 py-[9px] gap-y-2">

        <TopMenu/>

        <ScrollDownMenu/>

      </div>
      
    </>
  )
}