import { projectItems } from "@/lib/constants";
import { useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectSection = () => {
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
    <div className="relative w-full min-h-screen overflow-x-clip flex flex-col lg:flex-row justify-between p-180-b pt-24 lg:mt-[140px] mt-[110px] bg-primary-gray px-5 lg:ps-10 text-2xl text-primary-black border-t border-primary-black">
      <div className="w-[30%] h-fit text-sm lg:sticky top-0 lg:pt-16">
        <p className="md:text-sm text-xs w-[280px] lg:w-[250px] ">SIMPLICITY AND CLARITY ARE OUR GUIDING PRINCIPLES, FROM START TO FINISH – FROM DESIGN TO PRODUCT DEVELOPMENT.</p>
      </div>

      <div className="lg:w-[70%] flex justify-end lg:pt-0 pt-10">
        <div className="w-full relative lg:pt-16 space-y-[30px] md:space-y-[50px]">
          {projectItems.map((item) => (
            <Link href={item.link} key={item.id} className="flex gap-8 w-full">
              <p className="md:text-sm text-xs z-10">.{String(item.id).padStart(2, "0")}</p>
              <div
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex items-center relative justify-between pe-10 border-b md:pb-9 pb-5 w-full border-primary-black"
              >
                <div className="md:space-y-3 space-y-1 z-10">
                  <h1 className="md:text-6xl text-3xl">{item.title}</h1>
                  <p className="md:text-sm text-xs">{item.sub_title}</p>
                </div>
                <div className="group-hover:-rotate-45 z-10 h-8 w-8 md:h-10 lg:w-10 transition-all duration-500">
                  <Image src="/icon/arrowRight.svg" alt="arrowRight" className="w-full h-full" width={40} height={40} />
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
      </div>
    </div>
  );
};

export default ProjectSection;
