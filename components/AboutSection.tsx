'use client';

import React from 'react';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section className="w-full bg-zinc-950 border-t border-zinc-900 pt-16 sm:pt-24 pb-8 sm:pb-10 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            About & Passion
          </h2>
          <div className="h-1 w-44 sm:w-56 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-700 rounded-full" />
        </div>

        {/* Narrative Flow */}
        <div className="space-y-8 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            Driven by pure curiosity and visual experimentation, I operate as an autonomous tech explorer and digital builder. Rather than adhering strictly to traditional development paths, I focus on understanding modern IT trends, pushing the boundaries of AI-driven tools, and leveraging Vibe Coding to transform conceptual ideas into functional digital realities. For me, tech is not defined by sitting and writing code line by line—it is about mastering execution, leveraging intelligent systems, and bringing unique visions to life.
          </p>

          <p>
            My journey is rooted in continuous, self-directed learning. From completing my Secondary School Certificate (SSC) in 2026 to diving deep into hands-on web development and visual design recreations, I constantly challenge myself to analyze how things work under the hood. Recreating complex graphic UI layouts and building custom web elements allows me to hone my visual precision, color theory, and user experience intuition.
          </p>

          <p>
            Whether it is testing upcoming AI frameworks, designing minimalist brand assets, or experimenting with interactive web canvases, my goal remains constant: to bridge the gap between curiosity and creation. I view technology as a dynamic canvas where smart automation, aesthetic precision, and continuous research converge to craft truly immersive digital experiences.
          </p>
        </div>

        {/* Core Pillars Grid based strictly on the text themes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          <Card className="bg-zinc-900/60 border-zinc-800/80 p-6 rounded-xl hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-200 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Vibe Coding & AI Tools</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Leveraging smart automation and generative AI frameworks to build fast, modern, and production-grade prototypes.
            </p>
          </Card>

          <Card className="bg-zinc-900/60 border-zinc-800/80 p-6 rounded-xl hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-200 mb-4">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Visual Precision & UI</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Deconstructing high-level graphical designs, color theory, and responsive layouts to master user experience intuition.
            </p>
          </Card>

          <Card className="bg-zinc-900/60 border-zinc-800/80 p-6 rounded-xl hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-200 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Continuous Exploration</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Exploring cutting-edge IT trends, 3D interactive canvases, and autonomous digital building methods.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
