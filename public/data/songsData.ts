import { album } from "@/interfaces/songsDataInterface";

export const songsData: album[] = [
  {
    name: "All Hope Is Gone",
    artist: "Slipknot",
    src: "Slipknot/",
    songs: [
      {
        name: "Snuff",
        src: "Snuff.mp3",
        albumId: 0,
        songId: 0,
      },
    ]
  },
  {
    name: "Whatever People Say I Am, That's What I'm Not",
    artist: "Arctic Monkeys",
    src: "Arctic Monkeys/",
    songs: [
      {
        name: "Dancing Shoes",
        src: "Dancing Shoes.mp3",
        albumId: 1,
        songId: 0,
      },
      {
        name: "I Bet You Look Good On The Dancefloor",
        src: "I Bet You Look Good On The Dancefloor.mp3",
        albumId: 1,
        songId: 1,
      },
      {
        name: "Mardy Bum",
        src: "Mardy Bum.mp3",
        albumId: 1,
        songId: 2,
      },
      {
        name: "The View From The Afternoon",
        src: "The View From The Afternoon.mp3",
        albumId: 1,
        songId: 3,
      },
      {
        name: "When The Sun Goes Down",
        src: "When The Sun Goes Down.mp3",
        albumId: 1,
        songId: 4,
      },
    ]
  }
]