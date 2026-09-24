'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export function CtaSection() {
  const whatsappMessage =
    "Hi Midul! 👋 I checked out your portfolio and I'm impressed by your work in AI & development. I have an ambitious project/idea in mind and would love to discuss a potential collaboration. Let's connect!";

  const whatsappUrl = `https://wa.me/8801981274162?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contact-cta"
      className="relative w-full bg-[#0B0C10] py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden border-t border-cyan-950/40"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] rounded-full bg-[radial-gradient(ellipse,rgba(0,229,255,0.08)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/4 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Main CTA Card Box with futuristic border and backdrop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-[#0D0E12] via-[#0B0C10] to-[#08090C] p-8 sm:p-12 md:p-16 text-center backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(0,229,255,0.08)] overflow-hidden"
        >
          {/* Subtle top edge neon line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_15px_#00E5FF]" />

          {/* Corner glow effects */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#00E5FF]/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#00E5FF]/10 blur-2xl"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Main Heading with Cyan Gradient & Glow Accent */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl">
              Have an ambitious idea?{' '}
              <span className="bg-gradient-to-r from-[#00E5FF] via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.45)]">
                Let&apos;s turn it into reality.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl font-normal leading-relaxed">
              Available for freelance projects, AI research, &amp; technical collaborations.
            </p>

            {/* Primary Action Button (Electric Cyan CTA) */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-[#00E5FF] text-[#0B0C10] font-bold text-base sm:text-lg tracking-wide shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.7),0_0_25px_rgba(0,229,255,0.6)] hover:bg-[#38EFFF] cursor-pointer"
              >
                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-white/20 pointer-events-none" />

                <MessageCircle className="w-5 h-5 fill-[#0B0C10] text-[#0B0C10] transition-transform duration-300 group-hover:scale-110" />
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaSection;
