import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full relative flex lg:flex-row flex-col lg:p-180-b md:py-[150px] py-[100px] px-5 md:px-5 lg:px-10 bg-primary-gray">
      <div className=" w-[505px] h-fit text-sm lg:sticky top-0 lg:pt-16">
        <p className="w-[250px]">WE BELIEVE IN THE POWER OF TECHNOLOGY AND ITS ABILITY TO DEFINE AND TRANSFORM USER EXPERIENCES.</p>
      </div>  
      <div className="lg:w-[65%]">
        <div className="w-full mx-auto max-w-[920px] space-y-[30px] md:space-y-[50px]">
          <p className="lg:text-4xl md:text-3xl text-xl tracking-tight lg:leading-14 md:leading-12 leading-8 md:pt-16 pt-10">
            — I’m a Fullstack Developer with a passion for Frontend, dedicated to crafting intuitive digital experiences. My mission is to help brands elevate their online presence through thoughtful design and seamless functionality,
            ensuring each project exceeds expectations.
          </p>
          <p className="lg:text-4xl md:text-3xl text-xl tracking-tight lg:w-[90%] lg:leading-14 md:leading-12 leading-8">I help brands reach their potential through creative design and development.</p>
          <Link href="/about" className="">
            <p className="text-xs font-bold border-b w-fit leading-0 pb-1.5 border-primary-black text-primary-black">READ MORE ABOUT ME</p>
          </Link>
          <div className="w-full flex justify-end mt-[100px] md:mt-[150px]">
            <p className="text-xs w-[115px]">KEEP SCROLLING GOOD THINGS ARE COMING ❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
