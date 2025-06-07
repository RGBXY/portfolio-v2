import React from "react";
import SideContent from "../ui/SideContent";
import HeaderSection from "../ui/HeaderSection";
import Image from "next/image";
import ArticleCard from "../ui/ArticleCard";
import { articleCardsItems } from "@/lib/constants";

const ArticleSection = () => {
  return (
    <div className="section-container min-h-screen relative bg-primary-slate">
      <SideContent text="Not just code, sometimes i read and share my insight." cta="VIEW ALL MY INSIGHT" link="/article" />
      <div className="lg:w-[70%] flex justify-end lg:pt-0 pt-10">
        <div className="w-full relative lg:pt-16 lg:space-y-30 space-y-10">
          <HeaderSection text="- Valuable insights, exciting stories and other things worth sharing with the world." />

          <div className="lg:space-y-30 space-y-12">
            <div className="lg:ps-10 group">
              <p className="lg:text-sm text-xs lg:mb-4 mb-2">FEATURED INSIGHT</p>
              <div className="border w-full group-hover:scale-99 transition-all md:h-[500px] h-[250px] rounded-2xl overflow-hidden">
                <Image src="/img/article-img/article-1.png" className="w-full h-full object-cover" alt="how to work with me" width={500} height={500} />
              </div>
              <div className="mt-4 space-y-1.5 relative border-b border-gray-500 lg:pb-8 pb-6">
                <h1 className="lg:text-40 md:text-3xl text-2xl lg:leading-14 md:leading-9 leading-7">How to Work and Collaborate with Me</h1>
                <p className="lg:text-sm text-xs">It all began in 2019 with a simple gathering of three friends. We sat together, casually discussing our freelance UI/UX projects...</p>
                <div className="absolute bottom-0 group-hover:bottom-0 w-0 group-hover:w-full h-[1px] bg-primary-black transition-all duration-500"></div>
              </div>
            </div>

            <div className="lg:ps-10 space-y-8">
              {articleCardsItems.map((item, index) => (
                <ArticleCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
