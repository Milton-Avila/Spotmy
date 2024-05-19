'use client'

import React from "react"
import ScrollDownViewer from "./scrollDownViewer"
import SongHeader from "./songHeader"

export default function InterfaceRight() {
  return (
    <>
      <div className="flex flex-col col-span-5 my-[9px] py-[9px] rounded-lg bg-[#121212]">

        <SongHeader/>

        <ScrollDownViewer/>

      </div>
    </>
  )
}