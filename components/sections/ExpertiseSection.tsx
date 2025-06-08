"use client"

import SideContent from "../ui/SideContent";
import { Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { expertiseItems } from "@/lib/constants";
import HeaderSection from "../ui/HeaderSection";

export const ExpertiseSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section-container bg-primary-black text-secondary-gray">
      <SideContent text="My curiosity and passion for building products drive me to continuously improve and expand my skill set." />

      <div className="lg:w-[70%] flex justify-end lg:pt-0 pt-10">
        <div className="w-full relative lg:pt-16 lg:space-y-40 space-y-10">
          <HeaderSection text="EXPERTISE — From initial exploration through strategy, branding, and on to the product`s design and development." />

          <div className="space-y-[24px] md:space-y-[50px]">
            {expertiseItems.map((item, index) => (
              <div key={item.id} onClick={() => toggleAccordion(index)} className="cursor-pointer flex md:gap-8 gap-4 w-full">
                <p className="md:text-sm text-xs pt-1 z-10 text-accent-green">.{String(index + 1).padStart(2, "0")}</p>
                <div className="group relative lg:pe-10 pe-5 border-b md:pb-8 pb-4 w-full border-gray-700">
                  <div className="space-y-4 z-10">
                    <div className="flex items-center justify-between">
                      <h1 className="md:text-6xl text-4xl">{item.title}</h1>
                      <div className="z-10 transition-all duration-500">
                        <Plus size={30} className={`${openIndex === index ? "-rotate-45" : ""} text-secondary-gray transition-all`} />
                      </div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden space-y-8 md:space-y-14 lg:space-y-16"
                        >
                          <p className="md:w-[500px] text-xs md:text-sm">{item.description}</p>
                          <div className="flex gap-1 flex-wrap">
                            {item.tags.map((tag, tagIndex) => (
                              <div key={tagIndex} className="border border-accent-slate rounded-full px-3">
                                <span className="text-xs text-accent-slate">{tag}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className={` ${openIndex === index ? "w-full" : "w-0"} h-[1px] group-hover:w-full w-0 transition-all duration-700 absolute bottom-0 bg-accent-green`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
