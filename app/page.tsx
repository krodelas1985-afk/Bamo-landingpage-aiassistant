import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhatBaMoDoes } from "@/components/WhatBaMoDoes";
import { WhatYouDontNeed } from "@/components/WhatYouDontNeed";
import { CostComparison } from "@/components/CostComparison";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyBaMo } from "@/components/WhyBaMo";
import { BuiltForPH } from "@/components/BuiltForPH";
import { Measure } from "@/components/Measure";
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
        <WhatYouDontNeed />
        <CostComparison />
        <HowItWorks />
        <WhyBaMo />
        <BuiltForPH />
        <Measure />
        <ScarcityBand />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
