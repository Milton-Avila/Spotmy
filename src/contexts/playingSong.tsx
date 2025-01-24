'use client'

// React
import React, { createContext, useState, ReactNode, useEffect, useContext } from "react"

// Local
import { albumInterface, songInterface } from "@/interfaces/songsDataInterface"
import { songsData } from "@public/data/songsData"

interface PlayingSongContextType {
  interface: {
    page: string;
  };
  songInfo: {
    album: albumInterface;
    songData: songInterface;
    song: HTMLAudioElement | null;
    songLiked: boolean;
    songLoaded: boolean;
    setSong: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
  };
}

export const PlayingSongContext = createContext<PlayingSongContextType | null>(null);

export default function PlayingSongContextProvider({ children }: { children: ReactNode; }) {
  const playingSong = useContext(PlayingSongContext);

  const [artistId, setArtistId] = useState<number>(Math.floor(Math.random() * songsData.length));
  const [songId, setSongId] = useState<number>(Math.floor(Math.random() * songsData[artistId].songs.length));
  const [currentSong, setCurrentSong] = useState<HTMLAudioElement | null>(null);
  const [songLoaded, setSongLoaded] = useState<boolean>(false);

  const currentSongData = songsData[artistId].songs[songId];
  const currentAlbumData = songsData[artistId];
  const songLiked = currentSongData.songLiked;

  const handleSong = async ({ albumSrc, songSrc }: { albumSrc: string, songSrc: string }) => {
    try {
      const songModule = await import("@/../public/data/" + albumSrc + songSrc);

      if (typeof songModule.default === "string") {
        const audio = new Audio(songModule.default);
        setCurrentSong(audio);
        setSongLoaded(false);
        setSongLoaded(true);
      } else {
        console.error("Song URL error.");
      }
    } catch (error) {
      console.error("Audio error: ", error);
    }
  };

  useEffect(() => {
    handleSong({ albumSrc: currentAlbumData.src, songSrc: currentSongData.src });
    console.log('useefect')
  }, [playingSong]);

  return (
    <PlayingSongContext.Provider value={{
      interface: {
        page: 'home',
      },
      songInfo: {
        album: currentAlbumData,
        songData: currentSongData,
        song: currentSong,
        songLiked: songLiked,
        songLoaded: songLoaded,
        setSong: setCurrentSong,
      },
    }}>
      {children}
    </PlayingSongContext.Provider>
  );
}
