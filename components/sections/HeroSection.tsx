"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FlickeringGrid } from "../magicui/flickering-grid";
import { SpinningText } from "../magicui/spinning-text";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Cek apakah hero kelihatan
        setIsHeroVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 } // 10% kelihatan
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section ref={heroRef} className="bg-black h-[100svh] w-full flex flex-col text-white">
      <div className="h-full w-full">
        <FlickeringGrid className="fixed inset-0 z-0 w-full h-full [mask-image:radial-gradient(100%_circle_at_center,white,transparent)]" squareSize={2} gridGap={15} color="#eee" maxOpacity={0.5} flickerChance={0.1} />
        <div className={`${isHeroVisible ? "flex" : "hidden"} fixed lg:h-[86vh] h-[75vh] inset-0 w-full z-0 md:text-[7vw] text-[8vw] leading-[108%] left-0 flex-col justify-end p-5 lg:p-10`}>
          <div className="relative w-full h-20 ">
            <SpinningText className="absolute md:text-xl text-sm left-12 bottom-16 lg:hidden md:hidden block">something • great • waiting •</SpinningText>
          </div>
          <h1 className="text-accent-green">Derren Amadeo</h1>
          <h1 className="">Fullstack Developer</h1>
        </div>
        <div className="lg:h-[86vh] h-[75vh] flex relative items-end justify-end overflow-hidden ">
          <SpinningText className="absolute bottom-25 right-25 hidden md:block">something • great • waiting •</SpinningText>
        </div>
      </div>
      <div className="relative flex md:flex-row flex-col lg:h-[17vh] h-[25vh] text-xs">
        <Link className="w-full h-full flex items-center px-5 lg:px-10 group hover:cursor-pointer bg-accent-blue" href="/work">
          <div className="relative">
            <span>EXPLORE WORKS</span>
            <div className="absolute bottom-0.5 w-0 transition-all duration-400 group-hover:w-full h-[0.5px] bg-secondary-gray"></div>
          </div>
        </Link>
        <div className="w-full h-full flex items-center bg-accent-gray text-primary-black">
          <Link className="h-full w-[17vh] group flex items-center justify-center bg-accent-green" href="/resume">
            <div className="relative">
              <span>RESUME</span>
              <div className="absolute bottom-0.5 w-0 transition-all duration-400 group-hover:w-full h-[0.5px] bg-primary-black"></div>
            </div>
          </Link>
          <div className="flex-1 px-5 lg:px-10 flex items-center justify-between h-full ">
            <p>FOLIO : 02</p>
            <p>SCROLL DOWN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
