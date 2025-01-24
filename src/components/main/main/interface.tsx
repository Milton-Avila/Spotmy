'use client'

import { Label } from "@/components/ui/label";
import { PlayingSongContext } from "@/contexts/playingSong";
import React, { useContext, useEffect } from "react"

export default function InterfaceMain() {
  const playingSong = useContext(PlayingSongContext);
  let page = playingSong?.interface.page

  useEffect(() => {
    console.log(2)
    page = playingSong?.interface.page
    })

  return (
    <>
      <div className="col-span-16 rounded-lg py-[9px] my-[9px] bg-[#121212]">

        <Label>{page}</Label>

      </div>
    </>
  )
}