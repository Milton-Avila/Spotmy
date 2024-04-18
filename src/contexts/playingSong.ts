import { songInterface } from "@/interfaces/songsData";
import { createContext } from "react";
import { songs } from "@/data/songsData";

const PlayingSongContext = createContext<songInterface>(songs[0])

export { PlayingSongContext }