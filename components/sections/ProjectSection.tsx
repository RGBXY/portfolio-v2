import { projectItems } from "@/lib/constants";
import { useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SideContent from "../ui/SideContent";

const ProjectSection = () => {
  const sideContentPropsData = {
    text: "SIMPLICITY AND CLARITY ARE OUR GUIDING PRINCIPLES, FROM START TO FINISH – FROM DESIGN TO PRODUCT DEVELOPMENT.",
    cta: "VIEW ALL MY WORKS",
    link: "/projects",
  };

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const width = 400;
  const height = 250;

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - rect.left - width / 2;
    const relativeY = e.clientY - rect.top - height / 2;
    mousePosition.x.set(relativeX);
    mousePosition.y.set(relativeY);
  };

  return (
    <div className="section-container bg-primary-gray overflow-x-clip pt-24 lg:mt-[140px] mt-[110px] text-primary-black border-t border-primary-black">
      <SideContent text={sideContentPropsData.text} cta={sideContentPropsData.cta} link={sideContentPropsData.link} />

      <div className="lg:w-[70%] flex justify-end lg:pt-0 pt-10">
        <div className="w-full relative lg:pt-16 lg:space-y-40 space-y-10">
          <div className=" space-y-[12px] md:space-y-[50px]">
            {projectItems.map((item) => (
              <Link href={item.link} target="_blank" key={item.id} className="flex md:gap-8 gap-4 w-full">
                <p className="md:text-sm text-xs pt-1 z-10">.{String(item.id).padStart(2, "0")}</p>
                <div
                  onMouseMove={(e) => handleMouseMove(e)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group flex items-center relative justify-between lg:pe-10 pe-5 border-b md:pb-9 pb-4 w-full border-primary-black"
                >
                  <div className="md:space-y-3 z-10">
                    <h1 className="md:text-6xl text-2xl">{item.title}</h1>
                    <p className="md:text-sm text-xs">{item.sub_title}</p>
                  </div>
                  <div className="group-hover:-rotate-45 z-10 lg:h-7 lg:w-7 w-5 h-5 transition-all duration-500">
                    <Image src="/icon/arrowRight.svg" alt="arrowRight" className="object-cover w-full h-full" width={40} height={40} />
                  </div>
                  <div className="h-[1px]  group-hover:w-full w-0 transition-all duration-700 absolute bottom-0 bg-primary-black"></div>

                  {/* Custom Cursor */}
                  <motion.div
                    style={{
                      x: mousePosition.x,
                      y: mousePosition.y,
                      width: width,
                      height: height,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      scale: hoveredId === item.id ? 1 : 0.9,
                      opacity: hoveredId === item.id ? 1 : 0,
                    }}
                    className={`hidden z-0 absolute overflow-hidden top-0 left-0 bg-black rounded-lg pointer-events-none md:flex items-center justify-center`}
                  >
                    <Image className="w-full h-full" src={item.image} alt="hai" height={300} width={300} />
                  </motion.div>
                </div>
              </Link>
            ))}
          </div>

          <h1 className=" md:text-4xl text-xl md:w-[500px] ps-10">— CREATIVELY DRIVEN SOLUTION ORIENTATED</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
