"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const headingVariants = (direction: string) => ({
  hidden: { opacity: 0, x: direction === "right" ? -200 : 200 },
  visible: { opacity: 1, x: 0 },
});

const WorkHeading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="lg:px-10 px-5 text-[15vw] uppercase bg-primary-gray relative overflow-hidden">
      <div className="leading-[108%] text-center space-y-4">
        {["SELECTED", "WORKS"].map((text, index) => (
          <motion.h1 key={text} variants={headingVariants(index === 0 ? "right" : "left")} initial="hidden" animate={controls} transition={{ duration: 1, delay: 0.5 }}>
            {text}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default WorkHeading;
