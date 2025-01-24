'use client'

// React
import React, { useContext, useEffect, useState } from "react";

// UI
import { FaPlus } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { TbPointFilled } from "react-icons/tb";
import { Slider } from "@/components/ui/slider";
import { BsFillSkipStartFill } from "react-icons/bs";
import { LuRepeat, LuShuffle } from "react-icons/lu";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

// UseContext
import { PlayingSongContext } from "@/contexts/playingSong";

export default function PlayMenu() {
  const playingSong = useContext(PlayingSongContext);

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [songDur, setSongDur] = useState<number>(0);
  const [songCur, setsongCur] = useState<number>(0);
  const [songLoaded, setSongLoaded] = useState<boolean>(false);
  const [changingCurrent, setChangingCurrent] = useState<boolean>(false);
  const [selectedCur, setSelectedCur] = useState<number>(0);
  const [shuffleEnableOn, setShuffleEnabelOn] = useState<boolean>(false);
  const [shuffleOn, setShuffleOn] = useState<string>('false');
  const [repeatEnableOn, setRepeatEnableOn] = useState<boolean>(false);
  const [repeatOn, setRepeatOn] = useState<boolean>(false);
  const [song, setSong] = useState<HTMLAudioElement | null>(null);

  let barRest = Math.round(songCur % 60);

  // Event Listeners
  song?.addEventListener("play", () => { setIsPlaying(true) })
  song?.addEventListener("pause", () => { setIsPlaying(false) })
  document.body.onkeydown = (e) => {
    if (e.code == 'Space') {
      handleSpacePress()
    }
  }

  useEffect(() => {
    handleSongChange()
    handleSong()
  }, [playingSong?.songInfo.song])

  const handleSongChange = () => {

  }

  const handleSong = async () => {
    try {
      const songModule = await import("@/../public/data/" + playingSong?.songInfo.album.src + playingSong?.songInfo.songData.src)
      setSongLoaded(true)

      if (typeof songModule.default === "string") {
        setSong(new Audio(songModule.default))

      } else {
        console.error("Song url error.")

      }
    } catch (error) {
      console.error("Audio error: ", error)
    }
  };

  const handleChangeCurrentHold = (event: any) => {
    setsongCur(event)
    setSelectedCur(event)
    if (!changingCurrent) {
      setChangingCurrent(true)
    }
  }

  const handleChangeCurrentClick = () => {
    if (song != null) {
      song.currentTime = selectedCur
    }
    setChangingCurrent(false)
  }

  const CreateEnder = () => {
    if (song != null) {
      song.addEventListener('timeupdate', () => {
        if (song.currentTime == song.duration) {
          handleEnd()
        }
      });
    }
  }

  if (song != null) {
    song.addEventListener('loadedmetadata', () => {
      const durationInSeconds = song.duration
      setSongDur(durationInSeconds)
      CreateEnder()
    });

    song.addEventListener('timeupdate', () => {
      let currentTimeInSeconds = (changingCurrent ? selectedCur : song.currentTime)
      setsongCur(currentTimeInSeconds)
    });
  }


  const handleSpacePress = () => {
    if (isPlaying) {
      song?.pause()
    }
    else {
      song?.play()
    }
  }

  const handlePlay = () => {
    song?.play()
  }

  const handlePause = () => {
    song?.pause()
  }

  const handleRestart = () => {
    if (song != null) {
      song.currentTime = 0
    }
  }

  const handleBackSkip = () => {
    if (songCur < 3) {
      // Previous song
    } else {
      handleRestart()
    }
  }

  const handleFrontSkip = () => {
    if (song != null) {
      handleEnd()
    }
  }

  const handleNextSong = () => {
    if (repeatOn) {
      handleRestart()
      return false

    } else if (playingSong != undefined) {
      if (playingSong?.songInfo.album.songs.length >= playingSong?.songInfo.songData.songId) { // Is there a next song?
        // useContext(PlayingSongContext) = songsData[playingSong.albumId].songs[playingSong.songId + 1]
        return false
    }

    } else {
      return true
    }
  }

  const handleEnd = () => {
    if (song != null) {
      let end = handleNextSong()
      if (end) {
        handleRestart()
        handlePause()
      }
    }
  }

  return (
    <>

      <div className="flex mt-[12px] select-none justify-center">
        <div className="flex flex-col w-[28%] gap-y-1">

          <div className="flex justify-center items-center mb-[4px]">
            <div className="text-white grid grid-cols-5 gap-x-[10px] duration-100">

              {
                !shuffleEnableOn
                  ? <LuShuffle className="text-[19px] duration-100 mt-[6px] mx-auto text-stone-700" />

                  : shuffleOn == 'false'
                    ? <LuShuffle onClick={() => setShuffleOn('normal')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:text-white hover:cursor-pointer text-stone-400" />

                    : shuffleOn == 'normal'
                      ? <div className="text-green-400"><LuShuffle onClick={() => setShuffleOn('smart')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer" /> <TbPointFilled className="size-[10px] m-auto" /></div>
                      : <div className="text-green-400"><LuShuffle onClick={() => setShuffleOn('false')} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer" /> <FaPlus className="size-[7px] mt-[2px] m-auto" /></div>
              }

              {
                <BsFillSkipStartFill onClick={handleBackSkip} className="text-stone-400 hover:text-white text-[26px] duration-100 hover:cursor-pointer mt-[2px]" />
              }

              {
                !isPlaying
                  ? (<FaPlayCircle onClick={songLoaded ? handlePlay : (() => { })} className="text-[34px] hover:scale-[110%] duration-100 hover:cursor-pointer" />)
                  : (<FaPauseCircle onClick={handlePause} className="text-[34px] hover:scale-[110%] duration-100 hover:cursor-pointer" />)
              }

              {
                <BsFillSkipStartFill onClick={handleFrontSkip} className="text-stone-400 hover:text-white rotate-[180deg] text-[26px] duration-100 hover:cursor-pointer float-end mt-[2px] ml-[7px]" />
              }

              {
                !repeatEnableOn
                  ? <LuRepeat className="text-[19px] mt-[6px] mx-auto text-stone-700" />

                  : repeatOn
                    ? <div className="text-green-400"><LuRepeat onClick={() => setRepeatOn(false)} className="text-[19px] duration-100 mt-[6px] mx-auto hover:cursor-pointer" /> <TbPointFilled className="mt-[1px] size-[10px] mx-auto" /></div>
                    : <LuRepeat onClick={() => setRepeatOn(true)} className="text-[19px] duration-100 mt-[6px] mx-auto hover:text-white hover:cursor-pointer text-stone-400" />
              }

            </div>
          </div>

          <div className="flex justify-center items-start *:text-[12px] text-stone-400">

            <Label>{Math.floor(songCur / 60) + ":" + (barRest < 10 ? `0${barRest}` : barRest)}</Label>

            <Slider
              value={[songCur]}
              defaultValue={[songCur]}
              onValueChange={(even: any) => handleChangeCurrentHold(even)}
              onClick={() => handleChangeCurrentClick()}
              max={songDur}
              step={1}
              className="mt-[3px] min-w-[350px] w-full mx-[8px]" />

            <Label>{Math.floor(songDur / 60) + ":" + (songDur < 10 ? `0${Math.round(songDur % 60)}` : Math.round(songDur % 60))}</Label>
          </div>

        </div>
      </div>

    </>
  )
}