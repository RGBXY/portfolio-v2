import Link from "next/link";
import React from "react";
import { FlickeringGrid } from "../magicui/flickering-grid";
import { SpinningText } from "../magicui/spinning-text";

const HeroSection = () => {
  return (
    <div className="bg-black h-screen w-full flex flex-col text-white">
      <div className="h-full w-full ">
        <FlickeringGrid className="fixed inset-0 z-0 w-full h-full [mask-image:radial-gradient(100%_circle_at_center,white,transparent)]" squareSize={2} gridGap={15} color="#eee" maxOpacity={0.5} flickerChance={0.1} />
        <div className="fixed h-[86vh] w-full z-0 text-[7vw] leading-[108%] left-0 flex flex-col justify-end p-10">
          <h1 className="text-accent-green">Derren Amadeo</h1>
          <h1 className="">Fullstack Developer</h1>
        </div>
        <div className="h-[86vh] flex relative items-end justify-end overflow-hidden ">
          <SpinningText className="absolute bottom-25 right-25">something • great • waiting •</SpinningText>
        </div>
      </div>
      <div className="relative flex h-[17vh] text-xs">
        <Link className="w-full h-full flex items-center px-10 group hover:cursor-pointer bg-accent-blue" href="/works">
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
          <div className="flex-1 px-10 flex items-center justify-between h-full ">
            <p>FOLIO : 02</p>
            <p>SCROLL DOWN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
