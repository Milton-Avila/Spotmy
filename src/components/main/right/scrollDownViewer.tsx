'use client'

import React, { useContext, useState } from "react";
import Image from "next/image";
import { songsData } from "@public/data/songsData";
import { PlayingSongContext } from "@/contexts/playingSong";
import { songInterface } from "@/interfaces/songsDataInterface";

import { Label } from "../../ui/label";
import { Button } from "../../ui/button";

import { IoMdAddCircleOutline } from "react-icons/io";

export default function ScrollDownViewer() {
  const playingSong = useContext<songInterface>(PlayingSongContext);
  const [songName, setSongName] = useState<string>(playingSong.name);
  const [songArtist, setSongArtist] = useState<string>(songsData[playingSong.albumId].artist);
  const [songArtistSrc, setSongArtistSrc] = useState<string>("/data/" + songsData[playingSong.albumId].src + songsData[playingSong.albumId].artistSrc);
  const [songArtistDescription, setSongArtistDescription] = useState<string>(songsData[playingSong.albumId].artistDescription)
  const [songCover, setSongCover] = useState<string>("/data/" + songsData[playingSong.albumId].src + "cover.jpg");
  const [songMontlyLiteners, setSongMontlyListeners] = useState<string>(songsData[playingSong.albumId].montlyListeners);
  const [following, setFollowing] = useState<boolean>(false)

  return (
    <>

      <div className="h-full">

        <img
          src={songCover}
          alt="Song Cover"
          className="rounded-md w-[100%] mb-4"
        />

        <div className="flex h-10 mb-8">

          <div className="grid mb-auto grid-flow-row gap-y-1 overflow-x-clip whitespace-nowrap">
            <Label className="text-stone-200 hover:underline text-[20px] cursor-pointer font-extrabold">{songName}</Label>
            <Label className="text-stone-400 hover:underline text-[16px] cursor-pointer leading-3">{songArtist}</Label>
          </div>

          <div className="flex absolute right-6 bg-gradient-to-r from-transparent to-[45%] to-[#121212] w-12 h-14">
            <IoMdAddCircleOutline className="ml-auto size-[24px] text-stone-500 hover:text-stone-200 hover:cursor-pointer my-auto" /> 
          </div>

        </div>

        <div className="w-[100%] rounded-t-lg mt-4 overflow-hidden">
          <div className="absolute h-[250px] w-[15.5%] z-40 bg-gradient-to-t from-[0%] from-transparent to-[140%] to-[#121212]/50" />
          <div className="overflow-hidden h-[250px]">
            <Label className="flex font-bold absolute mx-3 my-4 z-50"> About the artist </Label>
            <Image src={songArtistSrc} className="flex w-full translate-y-[-70px]" alt="Artist Cover" width={300} height={300} />
          </div>
        </div>

        <div className="h-[170px] pl-1 pt-4 group bg-[#242424] rounded-b-lg cursor-pointer *:cursor-pointer">
          <Label className="flex font-bold mx-3 text-md"> {songArtist} </Label>
          <Label className="flex font-medium mx-3 mt-2 text-[15px] text-stone-400"> {songMontlyLiteners} montly listeners </Label>
          <Button onClick={()=>{setFollowing(!following)}} variant="outline" className="flex mr-4 mt-[-30px] ml-auto rounded-full font-bold border-[1px] h-[36px] hover:border-stone-200 hover:scale-[1.05] border-stone-500 px-[16px] active:scale-[0.95]"> {following ? 'Following' : 'Follow'} </Button>
          <Label className="flex font-medium ml-3 mr-4 mt-2 text-[14px] text-stone-400 line-clamp-3"> {songArtistDescription} montly listeners </Label>
        </div>

      </div>

    </>
  )
}