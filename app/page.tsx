"use client";

import AboutSection from "@/components/sections/AboutSection";
import ArticleSection from "@/components/sections/ArticleSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import WorkHeading from "@/components/sections/WorkHeading";

export default function Home() {
  return (
    <div className="overflo-hidden">
      <HeroSection />
      <AboutSection />
      <WorkHeading />
      <ProjectSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ArticleSection />
    </div>
  );
}
