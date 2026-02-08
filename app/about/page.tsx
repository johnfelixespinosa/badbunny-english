"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
            <div className="mb-8">
              <p className="font-mono text-xs tracking-[0.15em] text-[#00A0D6] uppercase mb-2">
                About This Project
              </p>
              <h1 className="display-text text-4xl md:text-5xl text-[#E31C23]">
                VIBED BY JESPN88
              </h1>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-700 mb-8">
              <p className="text-lg leading-relaxed">
                Hey! I'm <strong>John</strong> — an AI-native developer who builds products at the speed of thought.
              </p>
              
              <p className="leading-relaxed">
                This entire site was built in a single evening using <strong>conversational AI development</strong>. 
                No boilerplate. No templates. Just vibes and velocity.
              </p>

              <p className="leading-relaxed">
                I prompted my way through the UI, generated AI voice overlays for each track, 
                mixed the audio with ffmpeg, and deployed — all through natural language collaboration 
                with my AI coding partner.
              </p>

              <div className="bg-gray-50 rounded-xl p-5 my-6">
                <p className="font-mono text-xs tracking-wider text-[#00A0D6] uppercase mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "AI Voice Synthesis", "ffmpeg", "OpenClaw"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white rounded-full text-sm font-mono text-gray-600 border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="leading-relaxed">
                I'm currently <strong>looking for my next opportunity</strong> — whether that's a full-time role, 
                contract work, or collaborating on something cool. If you need someone who can ship fast 
                and thinks in AI-first workflows, let's talk.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://x.com/jespn88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E31C23] text-white rounded-full font-mono text-sm hover:bg-[#c91820] transition-colors"
            >
              <span>Follow @jespn88 on X</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Footer note */}
          <p className="text-center text-white/50 font-mono text-xs mt-8">
            Built with 🐰 energy for the Super Bowl LIX Halftime Show
          </p>
        </div>
      </div>
    </main>
  );
}
