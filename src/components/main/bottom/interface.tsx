'use client'

// React
import React from "react"

// Local
import LeftMenu from "./leftMenu";
import PlayMain from "./playMain";
import RightMenu from "./rightMenu";

export default function InterfaceBottom() {

  return (
    <>

      <div className="fixed bottom-[18px] h-[68px] px-[8px] w-full bg-black">

        <LeftMenu />

        <PlayMain />

        {/* <RightMenu /> */}

      </div>

    </>
  )
}