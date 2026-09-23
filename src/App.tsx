'use client';

import React from 'react';
import { SplineSceneBasic } from '@/components/ui/demo';
import { AboutSection } from '@/components/AboutSection';
import { StatsSection } from '@/components/StatsSection';
import { TimelineSection } from '@/components/TimelineSection';
import { TechnicalSkillsSection } from '@/components/TechnicalSkillsSection';
import { SoftwareToolsSection } from '@/components/SoftwareToolsSection';
import { MyCreationsSection } from '@/components/MyCreationsSection';
import { AreasOfExpertiseSection } from '@/components/AreasOfExpertiseSection';
import { StackedCircularFooter } from '@/components/ui/stacked-circular-footer';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-zinc-950 flex flex-col items-start justify-start p-0 m-0">
      <div className="w-full">
        <SplineSceneBasic />
      </div>
      <AboutSection />
      <StatsSection />
      <TimelineSection />
      <TechnicalSkillsSection />
      <SoftwareToolsSection />
      <MyCreationsSection />
      <AreasOfExpertiseSection />
      <div className="w-full border-t border-zinc-800/80">
        <StackedCircularFooter />
      </div>
    </main>
  );
}

