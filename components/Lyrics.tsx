"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { LyricLine } from "@/lib/tracks";

interface LyricsProps {
  lyrics: LyricLine[];
  currentTime: number;
  trackTitle: string;
}

export default function Lyrics({ lyrics, currentTime, trackTitle }: LyricsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLineIndex = lyrics.findIndex((line, index) => {
    const nextLine = lyrics[index + 1];
    return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
  });

  // Auto-scroll disabled

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lyrics-container overflow-hidden h-full"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-[#00A0D6] uppercase mb-1">
              Lyrics + Translation
            </p>
            <h3 className="display-text text-xl text-[#E31C23]">
              {trackTitle}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-gray-400">ES → EN</span>
          </div>
        </div>
      </div>

      {/* Lyrics Container */}
      <div
        ref={containerRef}
        className="h-[350px] overflow-y-auto px-6 py-6 space-y-4"
      >
        {lyrics.map((line, index) => {
          const isActive = index === currentLineIndex;
          const isPast = index < currentLineIndex;
          
          return (
            <motion.div
              key={`${trackTitle}-${index}`}
              className={`transition-all duration-300 ${isActive ? "py-2" : ""}`}
            >
              {line.text ? (
                <div className={`space-y-1 ${line.voiced && isActive ? "relative" : ""}`}>
                  {/* Voiced glow effect */}
                  {line.voiced && isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 rounded-lg blur-sm -z-10"
                    />
                  )}
                  {/* Spanish (original) */}
                  <motion.p
                    animate={line.voiced && isActive ? {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    } : {}}
                    transition={line.voiced && isActive ? {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    } : {}}
                    className={`font-mono leading-relaxed transition-all duration-300 ${
                      isActive && line.voiced
                        ? "text-xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-lg"
                        : isActive 
                        ? "text-lg text-[#E31C23] font-bold" 
                        : isPast
                        ? "text-sm text-gray-300"
                        : "text-sm text-gray-500"
                    }`}
                    style={line.voiced && isActive ? { WebkitBackgroundClip: "text" } : {}}
                  >
                    {line.text}
                  </motion.p>
                  {/* English translation */}
                  {line.translation && (
                    <motion.p
                      animate={line.voiced && isActive ? { opacity: [0.7, 1, 0.7] } : {}}
                      transition={line.voiced && isActive ? { duration: 2, repeat: Infinity } : {}}
                      className={`transition-all duration-300 ${
                        isActive && line.voiced
                          ? "text-base font-semibold text-yellow-500 italic"
                          : isActive 
                          ? "text-base text-[#00A0D6] italic" 
                          : isPast
                          ? "text-xs text-gray-200 italic"
                          : "text-xs text-gray-400 italic"
                      }`}
                    >
                      {line.translation}
                    </motion.p>
                  )}
                </div>
              ) : (
                <p className="text-gray-300 text-sm">• • •</p>
              )}
              
              {isActive && line.text && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  className="h-0.5 bg-gradient-to-r from-[#E31C23] to-[#00A0D6] mt-2"
                />
              )}
            </motion.div>
          );
        })}

        <div className="h-40" />
      </div>
    </motion.div>
  );
}
