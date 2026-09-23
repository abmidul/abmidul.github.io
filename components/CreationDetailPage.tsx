'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  Linkedin,
  Twitter,
  Mail,
  Share2
} from 'lucide-react';
import { Creation } from '@/types/creation';

interface CreationDetailPageProps {
  creation: Creation;
  onBack: () => void;
}

export function CreationDetailPage({ creation, onBack }: CreationDetailPageProps) {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="min-h-screen w-full bg-zinc-950 text-white selection:bg-yellow-500/30 selection:text-yellow-200">
      {/* Dynamic Background Glows */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.06)_0%,transparent_70%)] pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="fixed bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(234,179,8,0.06)_0%,transparent_70%)] pointer-events-none -z-10"
      />

      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/80 border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all duration-200 text-sm font-medium shadow-sm hover:border-yellow-500/30"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-all"
              title="Copy share link"
            >
              <Share2 size={15} />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
            {creation.liveUrl && (
              <a
                href={creation.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 font-semibold text-xs tracking-wide transition-all shadow-[0_0_16px_rgba(234,179,8,0.3)]"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-24">
        {/* Breadcrumb & Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400 mb-6">
          <span className="text-yellow-400/90 font-medium">Creations</span>
          <span className="text-zinc-600">/</span>
          <span className="px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 font-medium">
            {creation.category}
          </span>
          {creation.publishedDate && (
            <>
              <span className="text-zinc-600">•</span>
              <span className="inline-flex items-center gap-1.5 text-zinc-400">
                <Calendar size={14} />
                {creation.publishedDate}
              </span>
            </>
          )}
        </div>

        {/* Project Header Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
        >
          {creation.title}
        </motion.h1>

        {/* Subtitle / Executive Pitch */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed mb-8">
          {creation.subtitle}
        </p>

        {/* Action Links & Tech Stack Badges */}
        <div className="flex flex-wrap items-center gap-3 pb-8 mb-10 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2 mr-auto">
            {creation.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {creation.githubUrl && (
              <a
                href={creation.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-medium transition-all"
              >
                <Github size={15} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* High-Resolution Hero Section Visual Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-neutral-900/60 shadow-2xl mb-16"
        >
          <div className="aspect-[16/9] w-full relative overflow-hidden bg-zinc-900">
            <img
              src={creation.heroImage}
              alt={creation.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20 pointer-events-none" />

            {/* Floating Glassmorphic Watermark Badge */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/15 text-xs text-zinc-300 flex items-center gap-2 shadow-lg">
              <Sparkles size={14} className="text-yellow-400" />
              <span>High-Resolution Hero Preview</span>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics Grid (if available) */}
        {creation.metrics && creation.metrics.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {creation.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/40 backdrop-blur-xl border border-white/10 hover:border-yellow-500/30 transition-colors"
              >
                <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-1">
                  {metric.label}
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  {metric.value}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Comprehensive Project Overview */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              <Layers size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Project Overview</h2>
          </div>
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/40 backdrop-blur-xl border border-white/10 text-zinc-300 leading-relaxed text-base sm:text-lg">
            {creation.overview}
          </div>
        </section>

        {/* Comprehensive Project Breakdown */}
        {creation.detailedBreakdown && creation.detailedBreakdown.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Technical & Architectural Breakdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creation.detailedBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-950/40 backdrop-blur-xl border border-white/10 hover:border-sky-400/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-white/10">
                    {item.highlights.map((point, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-[#00f0ff] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Back Button Banner */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium transition-all hover:border-yellow-500/40"
          >
            <ArrowLeft size={18} />
            <span>Return to Portfolio</span>
          </button>

          <p className="text-xs text-zinc-500 text-center sm:text-right">
            Route: <code className="text-yellow-400 font-mono">/creations/{creation.id}</code>
          </p>
        </div>
      </main>

      {/* Footer Bar Featuring Direct Social Contact Links */}
      <footer className="w-full border-t border-white/10 bg-zinc-950/90 backdrop-blur-xl py-12 px-4 sm:px-8 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Let&apos;s Connect &amp; Collaborate</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Have an idea, project trial, or vision to build? Reach out directly.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
              className="p-3 rounded-xl bg-white/5 hover:bg-yellow-500/20 border border-white/10 hover:border-yellow-500/40 text-zinc-300 hover:text-yellow-400 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-white/5 hover:bg-yellow-500/20 border border-white/10 hover:border-yellow-500/40 text-zinc-300 hover:text-yellow-400 transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white/5 hover:bg-yellow-500/20 border border-white/10 hover:border-yellow-500/40 text-zinc-300 hover:text-yellow-400 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Twitter"
              className="p-3 rounded-xl bg-white/5 hover:bg-yellow-500/20 border border-white/10 hover:border-yellow-500/40 text-zinc-300 hover:text-yellow-400 transition-all duration-200"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
