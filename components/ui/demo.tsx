'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-[550px] md:min-h-[600px] h-auto md:h-[600px] rounded-none border-x-0 border-t-0 border-zinc-800/80 bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Left content */}
        <div className="flex-1 p-8 sm:p-12 md:p-16 lg:p-20 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight">
            Abdullah Al Midul
          </h1>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight">
            Tech Explorer & AI Enthusiast
          </h2>
          <p className="mt-4 text-neutral-300 max-w-xl text-base sm:text-lg leading-relaxed">
            A tech explorer and AI enthusiast driven by curiosity. I experiment with Vibe Coding, explore modern IT trends, and recreate visual graphic designs to master aesthetic precision and digital innovation.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[380px] sm:min-h-[450px] md:min-h-full w-full h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export function StackedCircularFooterDemo() {
  return (
    <div className="block">
      <StackedCircularFooter />
    </div>
  );
}

