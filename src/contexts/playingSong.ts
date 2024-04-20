import { songInterface } from "@/interfaces/songsData";
import { createContext } from "react";
import { songsData } from "@public/data/songsData";

const PlayingSongContext = createContext<songInterface>(songsData[0])

export { PlayingSongContext }