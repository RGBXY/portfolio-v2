import Image from "next/image";
import React from "react";

const ArticleMainCard = () => {
  return (
    <div className="lg:ps-10 group">
      <p className="lg:text-sm text-xs lg:mb-4 mb-2">FEATURED INSIGHT</p>
      <div className="border w-full group-hover:scale-99 transition-all aspect-3/2 rounded-2xl overflow-hidden">
        <Image src="/img/article-img/article-1.png" className="w-full h-full object-cover" alt="how to work with me" width={500} height={500} />
      </div>
      <div className="mt-4 space-y-1.5 relative border-b border-gray-500 lg:pb-8 pb-6">
        <h1 className="lg:text-40 md:text-3xl text-2xl lg:leading-14 md:leading-9 leading-7">How to Work and Collaborate with Me</h1>
        <p className="lg:text-base text-xs">Have an idea that can change the world? Don’t let it slip away—call me right now, and I’ll make it real.</p>
        <div className="absolute bottom-0 group-hover:bottom-0 w-0 group-hover:w-full h-[1px] bg-primary-black transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default ArticleMainCard;
