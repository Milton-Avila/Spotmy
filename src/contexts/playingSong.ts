import { songInterface } from "@/interfaces/songsDataInterface"
import { songsData } from "@public/data/songsData"
import { createContext, useState } from "react"

const PlayingSongContext = createContext<songInterface>(songsData[1].songs[2])

export { PlayingSongContext }