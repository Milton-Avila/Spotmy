import { album } from "@/interfaces/songsDataInterface";

export const songsData: album[] = [
  {
    name: "All Hope Is Gone",
    artist: "Slipknot",
    artistSrc: "SlipknotSrc.jpg",
    artistDescription: "",
    src: "Slipknot/",
    montlyListeners: "13.459.244",
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
    artistSrc: "Arctic MonkeysSrc.jpg",
    artistDescription: "With their nervy and literate indie rock sound, Arctic Monkeys are a respected, adventurous, and successful group that could easily be called Britain's biggest band of the early 21st century.",
    src: "Arctic Monkeys/",
    montlyListeners: "49.702.449",
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