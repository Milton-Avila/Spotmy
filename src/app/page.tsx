'use client'

// React
import React from "react";

// Local
import { songsData } from "@public/data/songsData";
import PlayingSongContextProvider from "@/contexts/playingSong";

// Components
import InterfaceMain from "@/components/main/main/interface";
import InterfaceBottom from "@/components/main/bottom/interface";
import InterfaceLeft from "@/components/main/left/interface";
import InterfaceRight from "@/components/main/right/interface";

export default function Home() {
  return (
    <PlayingSongContextProvider>
      <div className="grid grid-cols-24 gap-[8px] px-[8px] min-w-[800px] h-[94vh]">
        <InterfaceLeft />
        <InterfaceMain />
        <InterfaceRight />
      </div>
      <InterfaceBottom />
    </PlayingSongContextProvider>
  );
}
