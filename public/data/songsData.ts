import { albumInterface } from "@/interfaces/songsDataInterface";

export const songsData: albumInterface[] = [
  {
    albumId: 0,
    name: "All Hope Is Gone",
    artist: "Slipknot",
    artistSrc: "SlipknotSrc.png",
    artistDescription: "Released on June 29th, 1999, Slipknot’s self-titled debut was a smash, becoming a hit with critics and an instant classic with fans. It was, and is, a molotov cocktail signaling a revolution– embracing a creative direction that eschewed metal traditions in favor of fresh ideas.",
    src: "Slipknot/",
    montlyListeners: "13.459.244",
    songs: [
      {
        name: "Snuff",
        src: "Snuff.mp3",
        songId: 0,
        songLiked: false,
      },
      {
        name: "Vermillion Pt2",
        src: "Vermillion Pt2.mp3",
        songId: 0,
        songLiked: true,
      },
    ]
  },
  {
    albumId: 1,
    name: "Whatever People Say I Am, That's What I'm Not",
    artist: "Arctic Monkeys",
    artistSrc: "Arctic MonkeysSrc.png",
    artistDescription: "With their nervy and literate indie rock sound, Arctic Monkeys are a respected, adventurous, and successful group that could easily be called Britain's biggest band of the early 21st century.",
    src: "Arctic Monkeys/",
    montlyListeners: "49.702.449",
    songs: [
      {
        name: "Dancing Shoes",
        src: "Dancing Shoes.mp3",
        songId: 0,
        songLiked: false,
      },
      {
        name: "I Bet You Look Good On The Dancefloor",
        src: "I Bet You Look Good On The Dancefloor.mp3",
        songId: 1,
        songLiked: false,
      },
      {
        name: "Mardy Bum",
        src: "Mardy Bum.mp3",
        songId: 2,
        songLiked: false,
      },
      {
        name: "The View From The Afternoon",
        src: "The View From The Afternoon.mp3",
        songId: 3,
        songLiked: false,
      },
      {
        name: "When The Sun Goes Down",
        src: "When The Sun Goes Down.mp3",
        songId: 4,
        songLiked: false,
      },
    ]
  }
]