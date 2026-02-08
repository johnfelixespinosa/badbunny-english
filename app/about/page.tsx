"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#00A0D6] relative overflow-hidden">
      <div className="tropical-texture" />

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-mono text-sm">Back to songs</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 backdrop-blur rounded-2xl p-8 md:p-10 shadow-xl"
          >
            {/* Header */}
            <div className="mb-6">
              <p className="font-mono text-xs tracking-[0.15em] text-[#00A0D6] uppercase mb-2">
                About
              </p>
              <h1 className="display-text text-4xl md:text-5xl text-[#E31C23]">
                VIBED BY JESPN88
              </h1>
            </div>

            {/* Concert Photo */}
            <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6">
              <Image
                src="/concert.png"
                alt="Bad Bunny concert in Arizona"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-white text-xs font-mono">Arizona, 2022 🔥</span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-700 mb-8">
              <p className="text-lg leading-relaxed">
                Married my beautiful Puerto Rican wife and she put me on to Bad Bunny. 
                Been hooked ever since. That Arizona show? <em>Incredible.</em>
              </p>
              
              <p className="leading-relaxed">
                Built this whole thing in a few hours with <strong>Jazzy</strong> 🎷 — my AI coding partner running on{" "}
                <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-[#00A0D6] hover:underline">OpenClaw</a>. 
                Just vibes and voice overlays.
              </p>

              <div className="flex flex-col gap-2">
                <a 
                  href="/prompts.md" 
                  target="_blank"
                  className="inline-block text-sm font-mono text-[#00A0D6] hover:underline"
                >
                  📝 The prompts I used to get close to one-shotting this →
                </a>
                <a 
                  href="/audio-prompts.md" 
                  target="_blank"
                  className="inline-block text-sm font-mono text-[#00A0D6] hover:underline"
                >
                  🎧 How I got the audio files →
                </a>
              </div>

              {/* Tech Used */}
              <div className="bg-gray-50 rounded-xl p-5 mt-4">
                <p className="font-mono text-xs tracking-wider text-gray-500 uppercase mb-3">Built With</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <span className="text-2xl">🦞</span>
                    <span className="text-xs font-mono text-gray-600">OpenClaw</span>
                  </a>
                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <span className="text-2xl">🧠</span>
                    <span className="text-xs font-mono text-gray-600">Claude Code</span>
                  </a>
                  <a href="https://www.nanobanana.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <span className="text-2xl">🍌</span>
                    <span className="text-xs font-mono text-gray-600">Nano Banana</span>
                  </a>
                  <a href="https://lalals.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <span className="text-2xl">🎤</span>
                    <span className="text-xs font-mono text-gray-600">Lalals</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 py-3">
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-mono text-gray-600">
                  👶 New Father
                </span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-mono text-gray-600">
                  Ex-YC
                </span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-mono text-gray-600">
                  AI Engineer
                </span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-mono text-gray-600">
                  RoR
                </span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-mono text-gray-600">
                  Tinkerer
                </span>
                <a 
                  href="mailto:johnfelix.espinosa@icloud.com?subject=Hi%20John%20-%20Saw%20your%20Bad%20Bunny%20site"
                  className="px-3 py-1.5 bg-[#E31C23]/10 rounded-full text-sm font-mono text-[#E31C23] border border-[#E31C23]/20 hover:bg-[#E31C23]/20 transition-colors"
                >
                  Open to opportunities ✨
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://x.com/jespn88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E31C23] text-white rounded-full font-mono text-sm hover:bg-[#c91820] transition-colors"
            >
              <span>@jespn88</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
