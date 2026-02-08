"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import AudioPlayer from "@/components/AudioPlayer";
import Lyrics from "@/components/Lyrics";
import TrackCard from "@/components/TrackCard";
import { tracks } from "@/lib/tracks";

export default function Home() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  const currentTrack = tracks[currentTrackIndex];

  const handleTimeUpdate = useCallback((time: number) => {
    setCurrentTime(time);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setCurrentTime(0);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
    setCurrentTime(0);
  }, []);

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setShouldAutoPlay(true);
  };

  return (
    <main className="min-h-screen bg-[#00A0D6] relative overflow-hidden">
      {/* Subtle texture */}
      <div className="tropical-texture" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-8 pb-6 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              {/* Title section */}
              <div>
                <h1 className="display-text text-6xl md:text-8xl leading-none">
                  <span className="text-white block text-4xl md:text-5xl mb-1">ENGLISH</span>
                  <span className="text-album-red">BAD<br/>BUNNY</span>
                </h1>
              </div>

              {/* Album title */}
              <div className="text-right">
                <h2 className="display-text text-3xl md:text-5xl text-white leading-tight">
                  DeBÍ<br/>
                  TiRAR<br/>
                  MáS<br/>
                  FOToS
                </h2>
              </div>

              {/* PR Seal */}
              <div className="pr-seal w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center">
                <span className="text-xs">PUERTO RICO</span>
                <span className="text-2xl font-bold">2025</span>
                <span className="text-[8px]">SEGUIMO AQUÍ</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Tagline */}
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="handwritten text-3xl md:text-4xl text-white"
            >
              Finally know what you&apos;re singing during the halftime show 🐰
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Audio Player */}
              <div>
                <AudioPlayer
                  track={currentTrack}
                  onTimeUpdate={handleTimeUpdate}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  autoPlay={shouldAutoPlay}
                />
              </div>

              {/* Lyrics */}
              <div>
                <Lyrics
                  lyrics={currentTrack.lyrics}
                  currentTime={currentTime}
                  trackTitle={currentTrack.title}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Track List */}
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-white/70 uppercase mb-2">
                translated lyrics
              </p>
              <h2 className="display-text text-4xl md:text-5xl text-album-red">
                CANCIONES
              </h2>
            </motion.div>

            {/* Track Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {tracks.map((track, index) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  index={index}
                  isActive={currentTrackIndex === index}
                  onClick={() => handleTrackSelect(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-10 bg-gradient-to-t from-[#008CB8]/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="handwritten text-2xl text-white">
                  Bad Bunny lyrics translated to English
                </p>
              </div>
              <div className="text-right space-y-1">
                <a href="/about" className="font-mono text-sm text-white hover:text-[#E31C23] transition-colors block">
                  vibed by @jespn88 ✨
                </a>
                <p className="font-mono text-xs text-white/50">
                  Fan site • All rights belong to Bad Bunny & Rimas Entertainment
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
