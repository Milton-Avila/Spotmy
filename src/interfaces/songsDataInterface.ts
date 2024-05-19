import { Dispatch, SetStateAction } from "react";

interface songInterface {
  name: string;
  src: string;
  albumId: number;
  songId: number
}

interface album {
  name: string;
  artist: string;
  src: string;
  songs: songInterface[];
}

interface playingSongInterface{
  value: [playingSong: songInterface,
  setPlayingSong: Dispatch<SetStateAction<songInterface>>]
}

export type { songInterface, album, playingSongInterface }