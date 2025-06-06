import React from "react";
import SideContent from "../ui/SideContent";
import { experienceItems } from "@/lib/constants";
import ExperienceCard from "../ui/ExpirienceCard";
import HeaderSection from "../ui/HeaderSection";

const ExperienceSection = () => {
  const experienceLength = experienceItems.length;

  return (
    <div className="section-container min-h-screen relative bg-primary-gray">
      <SideContent text="Each step in my process has been a learning experience, driving me to grow and adapt in an ever-evolving industry." />
      <div className="lg:w-[70%] flex justify-end lg:pt-0 pt-10">
        <div className="w-full relative lg:pt-16 lg:space-y-30 space-y-10">
          <HeaderSection text="- My passion drives me to keep exploring, and experiences shape and refine my skills." />

          <div>
            {experienceItems.map((exp, index) => (
              <ExperienceCard key={index} data={exp} index={index} dataLength={experienceLength} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
