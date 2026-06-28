import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhatBaMoDoes } from "@/components/WhatBaMoDoes";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyBaMo } from "@/components/WhyBaMo";
import { ScarcityBand } from "@/components/ScarcityBand";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhatBaMoDoes />
        <HowItWorks />
        <WhyBaMo />
        <ScarcityBand />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
