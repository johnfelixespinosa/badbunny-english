export interface Track {
  id: string;
  title: string;
  titleEnglish: string;
  album: string;
  duration: string;
  durationSeconds: number;
  coverUrl: string;
  audioUrl?: string;
  lyrics: LyricLine[];
}

export interface LyricLine {
  time: number;
  text: string;
  translation?: string;
  voiced?: boolean;
}

export const tracks: Track[] = [
  {
    id: "debi-tirar-mas-fotos",
    title: "DtMF",
    titleEnglish: "I Should've Taken More Photos",
    album: "DeBÍ TiRAR MáS FOToS",
    duration: "0:55",
    durationSeconds: 55,
    coverUrl: "/covers/dtmf-lawnchair.jpg",
    audioUrl: "/audio/debi-tirar-mas-fotos.mp3",
    lyrics: [
      { time: 0, text: "♪ ♪ ♪" },
      { time: 10, text: "I should've taken more pictures when I had you", voiced: true },
      { time: 16, text: "I should've given you more kisses and hugs whenever I could", voiced: true },
      { time: 22, text: "Ayy, I hope my people never move away", voiced: true },
      { time: 28, text: "And if I get drunk today, I hope they help me out", voiced: true },
      { time: 34, text: "I should've taken more pictures when I had you", voiced: true },
      { time: 40, text: "I should've given you more kisses and hugs whenever I could", voiced: true },
      { time: 45, text: "♪ ♪ ♪" },
    ],
  },
  {
    id: "nuevayol",
    title: "NUEVAYoL",
    titleEnglish: "New York",
    album: "DeBÍ TiRAR MáS FOToS",
    duration: "0:32",
    durationSeconds: 32,
    coverUrl: "/covers/dtmf-lawnchair.jpg",
    audioUrl: "/audio/nuevayol.mp3",
    lyrics: [
      { time: 0, text: "♪ ♪ ♪" },
      { time: 10, text: "Hey, hey, hey, July 4th, 4th of July", voiced: true },
      { time: 13, text: "I'm hanging out drunk with my cousin, feeling fly", voiced: true },
      { time: 16, text: "My people in The Bronx know what's up", voiced: true },
      { time: 19, text: "Buzzing high over in Washington Heights", voiced: true },
      { time: 22, text: "♪ ♪ ♪" },
    ],
  },
  {
    id: "baile-inolvidable",
    title: "BAILE INoLVIDABLE",
    titleEnglish: "Unforgettable Dance",
    album: "DeBÍ TiRAR MáS FOToS",
    duration: "0:42",
    durationSeconds: 42,
    coverUrl: "/covers/dtmf-lawnchair.jpg",
    audioUrl: "/audio/baile-inolvidable.mp3",
    lyrics: [
      { time: 0, text: "♪ ♪ ♪" },
      { time: 15, text: "No, no I can't forget you", voiced: true },
      { time: 18, text: "No, no I can't erase you", voiced: true },
      { time: 21, text: "You taught me how to love", voiced: true },
      { time: 24, text: "You taught me to dance", voiced: true },
      { time: 27, text: "♪ ♪ ♪" },
    ],
  },
  {
    id: "titi-me-pregunto",
    title: "TiTi Me Preguntó",
    titleEnglish: "Titi Asked Me",
    album: "Un Verano Sin Ti",
    duration: "0:47",
    durationSeconds: 47,
    coverUrl: "/covers/unverano-heart.webp",
    audioUrl: "/audio/titi-me-pregunto.mp3",
    lyrics: [
      { time: 0, text: "♪ ♪ ♪" },
      { time: 13, text: "Hey, auntie asked me if I have a lot of girlfriends, a lot of girlfriends", voiced: true },
      { time: 17, text: "Today I have one, tomorrow I'll have another, hey, but there's no wedding", voiced: true },
      { time: 21, text: "Auntie asked me if I have a lot of girlfriends, heh, a lot of girlfriends", voiced: true },
      { time: 25, text: "Today I have one, tomorrow I'll have another", voiced: true },
      { time: 29, text: "I'm gonna take them all to the VIP, the VIP, hey", voiced: true },
      { time: 33, text: "Say hello to auntie", voiced: true },
      { time: 36, text: "Let's take a selfie, say \"cheese\"", voiced: true },
      { time: 39, text: "♪ ♪ ♪" },
    ],
  },
];

export const getTrackById = (id: string): Track | undefined => {
  return tracks.find((track) => track.id === id);
};
