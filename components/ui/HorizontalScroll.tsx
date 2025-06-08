"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import CardWork from "./CardWork";
import { projectItems } from "@/lib/constants";

const HorizontalScroll = () => {
  const [widthCard, setWidthCard] = useState(58);
  const [widthWrapOut, setWidthWrapOut] = useState(100);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const CardCount = projectItems.length;
  const gap = 2; // vw

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleResize = () => {
      const newWidthCard = window.innerWidth < 1024 ? 100 : 58;
      const newWidthWrapOut = newWidthCard * CardCount + gap * (CardCount - 1);
      const widthWrap = newWidthWrapOut - 100;

      setWidthCard(newWidthCard);
      setWidthWrapOut(newWidthWrapOut);

      // Hapus scrollTrigger lama
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Buat ulang
      gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: `-${widthWrap}vw`,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "1000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    };

    // Panggil langsung saat mount
    handleResize();

    // Tambahkan event listener
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener & ScrollTrigger saat unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="overflow-hidden ">
      <div ref={triggerRef}>
        <div
          style={{
            width: `${widthWrapOut}vw`,
            gap: `${gap}vw`,
          }}
          className="h-screen flex flex-row relative py-10"
          ref={sectionRef}
        >
          {projectItems.map((item, index) => (
            <CardWork key={index} dataProject={item} style={{ width: `${widthCard}vw` }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
