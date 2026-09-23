'use client';

import React from 'react';
import { Palette, Terminal, Cpu, Sparkles } from 'lucide-react';

export default function Section5() {
  return (
    <section className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto bg-black text-white">
      <div className="mb-14 sm:mb-16 text-center md:text-center max-w-4xl md:mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] md:leading-[1.12] bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
          <span className="block md:block">Skills &amp; Capabilities</span>
          <span className="block md:block">Matrix</span>
        </h2>
        <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.4)]" />
        <p className="text-gray-400 text-sm md:text-base mt-3 sm:mt-4 max-w-2xl mx-auto">
          Core competencies, logic building, visual design, and hands-on experimentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* BENTO CARD 1: Core Design & Visual Assets (Desktop Left, Row 1) */}
        <div className="md:col-span-2 md:col-start-1 md:row-start-1 relative group overflow-hidden rounded-2xl border border-yellow-500/20 bg-neutral-900/60 backdrop-blur-xl p-6 hover:border-yellow-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                <Palette size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100">Core Design & Visual Assets</h3>
                <p className="text-xs text-yellow-400 font-medium">Primary Tool: Canva</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Specialized in crafting brand asset designs, visual graphics recreations, and high-impact dark aesthetic banners using custom color palettes centered on Deep Black & Royal Gold.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {['Brand Asset Design', 'Visual Graphics Recreation', 'Dark Aesthetic Banners', 'Deep Black & Royal Gold'].map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BENTO CARD 2: Prompting & Natural Language Logic (Desktop Right, Row 1) */}
        <div className="md:col-span-1 md:col-start-3 md:row-start-1 relative group overflow-hidden rounded-2xl border border-yellow-500/20 bg-neutral-900/60 backdrop-blur-xl p-6 hover:border-yellow-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                <Terminal size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100">Prompting & Logic</h3>
                <p className="text-xs text-yellow-400 font-medium">Context & Structure</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Crafting clear, contextual natural language prompts to structure concepts, design systems, and application logic seamlessly.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {['Structured Prompting', 'Context Building', 'System Design Logic'].map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BENTO CARD 3: Logic & Problem Solving (Desktop Right, Row 2) */}
        <div className="md:col-span-1 md:col-start-3 md:row-start-2 relative group overflow-hidden rounded-2xl border border-yellow-500/20 bg-neutral-900/60 backdrop-blur-xl p-6 hover:border-yellow-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100">Logic & Problem Solving</h3>
                <p className="text-xs text-yellow-400 font-medium">Python & Scripting</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Building foundational logic, math and evaluation tools, and functional scripts through structured, step-by-step problem-solving.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {['Python Concepts', 'Scripting', 'Logic Building', 'Evaluation Tools'].map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BENTO CARD 4: Experiments & Learning Playground (Desktop Left, Row 2) */}
        <div className="md:col-span-2 md:col-start-1 md:row-start-2 relative group overflow-hidden rounded-2xl border border-yellow-500/20 bg-neutral-900/60 backdrop-blur-xl p-6 hover:border-yellow-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100">Experiments & Learning Playground</h3>
                <p className="text-xs text-yellow-400 font-medium">Project Trials & Testing</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Hands-on experimentation with brand identity, luxury visual concepts, layout ideas, and exploratory e-commerce design trials.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {['Brand Identity', 'Luxury Visual Concepts', 'UI Trials', 'E-commerce Concepts'].map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export { Section5 as SkillsMatrixSection };
