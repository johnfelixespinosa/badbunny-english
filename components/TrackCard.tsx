"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Track } from "@/lib/tracks";

interface TrackCardProps {
  track: Track;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function TrackCard({ track, index, isActive, onClick }: TrackCardProps) {
  // Varied rotations for natural scattered look
  const rotations = [-4, 3, -2, 5, -3, 2, -5, 4, -1, 3];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        rotate: 0, 
        scale: 1.08,
        y: -12,
        transition: { duration: 0.25 } 
      }}
      onClick={onClick}
      className={`cursor-pointer polaroid ${isActive ? "ring-2 ring-[#E31C23] ring-offset-2 ring-offset-[#00A0D6]" : ""}`}
      style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}
    >
      {/* Album Cover */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <Image
          src={track.coverUrl}
          alt={track.title}
          fill
          className="object-cover"
        />
        
        {/* Play overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-[#00A0D6]/70 flex items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Play size={18} className="text-[#E31C23] ml-0.5" />
          </div>
        </motion.div>

        {/* Active indicator */}
        {isActive && (
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#E31C23] animate-pulse shadow-lg" />
        )}
      </div>

      {/* Track Info - Spanish only */}
      <div className="pt-3 text-center">
        <h3 className="handwritten text-lg text-[#1a1a1a] leading-tight">
          {track.title}
        </h3>
        <p className="font-mono text-[10px] text-gray-500 mt-1">
          {track.duration}
        </p>
      </div>
    </motion.div>
  );
}
