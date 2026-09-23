'use client';

import React, { useEffect, useRef, useState } from 'react';
import { STATS_DATA, StatItem } from '@/data/stats';

interface StatCardProps {
  item: StatItem;
  key?: React.Key;
}

function StatCard({ item }: StatCardProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  const startAnimation = () => {
    let startTimestamp: number | null = null;
    const duration = 1600; // milliseconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth ease-out quad curve
      const easedProgress = progress * (2 - progress);
      const currentNumber = Math.floor(easedProgress * item.value);

      setCurrentValue(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentValue(item.value);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            startAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [item.value]);

  return (
    <div
      ref={cardRef}
      onClick={() => startAnimation()}
      className="group relative cursor-pointer select-none rounded-xl sm:rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-3 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-zinc-900/90 hover:shadow-lg hover:shadow-cyan-950/30 flex flex-col items-center justify-center text-center"
      title="Click to replay count animation"
    >
      {/* Top Animated Number (0 to target) */}
      <div className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-cyan-400 transition-transform duration-300 group-hover:scale-105 tabular-nums">
        {item.prefix || ''}
        {item.padDigits ? String(currentValue).padStart(item.padDigits, '0') : currentValue}
        {item.suffix}
      </div>

      {/* Bottom Label matching reference image */}
      <p className="mt-1.5 sm:mt-3 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-zinc-400 uppercase leading-tight">
        {item.label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="w-full bg-zinc-950 pb-12 sm:pb-16 px-4 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Strictly 3-columns side-by-side in 1 row on both mobile and desktop */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5 md:gap-6 w-full">
          {STATS_DATA.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
