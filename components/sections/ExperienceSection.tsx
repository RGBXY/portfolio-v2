import React from "react";
import SideContent from "../ui/SideContent";
import { experienceItems } from "@/lib/constants";
import ExperienceCard from "../ui/ExpirienceCard";

const ExperienceSection = () => {
  const experienceLength = experienceItems.length;

  return (
    <div className="section-container min-h-screen">
      <SideContent text="Each step in my career has been a learning experience, driving me to grow and adapt in an ever-evolving industry." />
      <div className="lg:w-[70%] flex justify-end lg:pt-0 pt-10">
        <div className="w-full relative lg:pt-16 lg:space-y-30 space-y-10">
          <h1 className=" md:text-4xl text-xl md:w-[70%] lg:ps-10 lg:leading-14">EXPERTISE — From initial exploration through strategy, branding, and on to the product`s design and development.</h1>

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
