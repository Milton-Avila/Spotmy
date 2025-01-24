'use client'

// React
import React, { useContext, useEffect, useState } from "react"
import Image from 'next/image'

// UI
import { IoMdAddCircleOutline, IoMdCheckmarkCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";

// Local
import { PlayingSongContext } from '@/contexts/playingSong';

export default function LeftMenu() {
  const playingSong = useContext(PlayingSongContext);

  const [songName, setSongName] = useState<string>(playingSong!.songInfo.songData.name);
  const [songCover, setSongCover] = useState<string>("/data/" + playingSong!.songInfo.album.src + "cover.png");
  const [artistName, setArtistName] = useState<string>(playingSong!.songInfo.album.artist);
  const [songLiked, setSongLiked] = useState<boolean>(false)

  useEffect(() => {
    if (playingSong != undefined) {
      setSongName(playingSong.songInfo.songData.name);
      setArtistName(playingSong.songInfo.album.artist);
      setSongCover("/data/" + playingSong.songInfo.album.src + "cover.png")
      setSongLiked(playingSong.songInfo.songLiked)
    }
  }, [playingSong]);

  return (
    <>

      <div className="absolute flex items-center w-fit max-w-[400px] overflow-hidden  pr-[30px]">
        <div className="w-[80px] ml-[-4px]">

          <img
            src={songCover}
            alt="Song Cover"
            className="scale-[0.7] rounded-md"
          />

        </div>

        <div className="my-auto ml-[2px]">
          <Label className="text-stone-200 hover:underline cursor-pointer">{songName}</Label>
          <Label className="block text-stone-400 hover:underline text-xs cursor-pointer transform translate-y-[-2px]">{artistName}</Label>
        </div>

        {
          songLiked
            ? <IoMdCheckmarkCircle onClick={() => { setSongLiked(false) }} className="my-auto absolute right-0 ml-[14px] mt-[-4px] size-[20px] text-green-500 hover:cursor-pointer " />
            : <IoMdAddCircleOutline onClick={() => { setSongLiked(true) }} className="my-auto absolute right-0 ml-[14px] mt-[-4px] size-[20px] text-stone-400 hover:text-stone-200 hover:cursor-pointer" />
        }
      </div>

    </>
  )
}