"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Track } from "@/lib/tracks";

interface AudioPlayerProps {
  track: Track;
  onTimeUpdate: (time: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  autoPlay?: boolean;
}

export default function AudioPlayer({ track, onTimeUpdate, onPrevious, onNext, autoPlay }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (autoPlay && track.audioUrl) {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    } else if (autoPlay) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [track.id, autoPlay]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      onTimeUpdate(audioRef.current.currentTime);
    }
  };

  const togglePlay = () => {
    if (audioRef.current && track.audioUrl) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !track.audioUrl) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= track.durationSeconds) {
            setIsPlaying(false);
            onNext();
            return 0;
          }
          onTimeUpdate(prev + 0.1);
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, track.audioUrl, track.durationSeconds, onTimeUpdate, onNext]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    onTimeUpdate(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative">
      {track.audioUrl && (
        <audio
          ref={audioRef}
          src={track.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={onNext}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="player-container p-6 md:p-8"
      >
        <div className="flex flex-col items-center">
          {/* Vinyl Record */}
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                duration: 8,
                repeat: isPlaying ? Infinity : 0,
                ease: "linear",
              }}
              className="vinyl w-44 h-44 md:w-52 md:h-52"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38%] h-[38%] rounded-full overflow-hidden">
                <Image
                  src={track.coverUrl}
                  alt={track.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Track Info */}
          <div className="text-center mb-5 w-full">
            <p className="font-mono text-xs tracking-[0.15em] text-[#00A0D6] uppercase mb-1">
              {isPlaying ? "▶ Reproduciendo" : "En pausa"}
            </p>
            <h2 className="display-text text-2xl md:text-3xl text-[#E31C23] mb-1">
              {track.title}
            </h2>
            <p className="font-mono text-xs text-gray-500">
              {track.album}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full mb-5">
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full progress-bar"
                style={{ width: `${(currentTime / track.durationSeconds) * 100}%` }}
              />
              <input
                type="range"
                min="0"
                max={track.durationSeconds}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{track.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onPrevious}
              className="text-gray-400 hover:text-[#E31C23] transition-colors"
            >
              <SkipBack size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="w-14 h-14 rounded-full btn-red flex items-center justify-center shadow-lg"
            >
              {isPlaying ? (
                <Pause size={24} className="text-white" />
              ) : (
                <Play size={24} className="text-white ml-1" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onNext}
              className="text-gray-400 hover:text-[#E31C23] transition-colors"
            >
              <SkipForward size={24} />
            </motion.button>
          </div>

          {/* Volume */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-gray-400 hover:text-[#00A0D6] transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                [&::-webkit-slider-thumb]:bg-[#E31C23] [&::-webkit-slider-thumb]:rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
