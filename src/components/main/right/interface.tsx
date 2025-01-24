'use client'

import React from "react"
import ScrollDownViewer from "./scrollDownViewer"
import SongHeader from "./songHeader"

export default function InterfaceRight() {
  return (
    <>
      <div className="col-span-4 flex flex-col my-[9px] px-[16px] py-[9px] rounded-lg bg-[#121212]">

        <SongHeader />

        <ScrollDownViewer />

      </div>
    </>
  )
}