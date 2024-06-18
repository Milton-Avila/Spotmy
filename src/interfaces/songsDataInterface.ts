import { Dispatch, SetStateAction } from "react";

interface songInterface {
  name: string;
  src: string;
  albumId: number;
  songId: number;
}

interface album {
  name: string;
  artist: string;
  artistSrc: string;
  artistDescription: string;
  src: string;
  montlyListeners: string;
  songs: songInterface[];
}

interface playingSongInterface{
  value: [playingSong: songInterface,
  setPlayingSong: Dispatch<SetStateAction<songInterface>>]
}

export type { songInterface, album, playingSongInterface }