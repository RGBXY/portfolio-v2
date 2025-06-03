import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full relative flex p-180 px-10 bg-primary-gray">
      <div className=" w-[505px] h-fit text-xs sticky top-0 pt-16">
        <p className="w-[250px]">WE BELIEVE IN THE POWER OF TECHNOLOGY AND ITS ABILITY TO DEFINE AND TRANSFORM USER EXPERIENCES.</p>
      </div>
      <div className="w-[65%]">
        <div className="w-full mx-auto max-w-[920px]">
          <p className="text-4xl tracking-tight  leading-14 pt-16">
            — I’m a Fullstack Developer with a passion for Frontend, dedicated to crafting intuitive digital experiences. My mission is to help brands elevate their online presence through thoughtful design and seamless functionality,
            ensuring each project exceeds expectations.
          </p>
          <p className="text-4xl tracking-tight w-[90%] leading-14 mt-[50px]">My mission is to help brands unlock their maximum capabilities through design and development.</p>
          <Link href="/about" className="">
            <p className="mt-[50px] text-xs font-bold border-b w-fit leading-0 pb-1.5 border-primary-black text-primary-black">READ MORE ABOUT ME</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
