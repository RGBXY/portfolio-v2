import React from "react";
import SideContent from "../ui/SideContent";
import HeaderSection from "../ui/HeaderSection";
import ArticleCard from "../ui/ArticleCard";
import { articleCardsItems } from "@/lib/constants";
import ArticleMainCard from "../ui/ArticleMainCard";

const ArticleSection = () => {
  return (
    <div className="section-container min-h-screen relative bg-primary-slate">
      <SideContent text="Not just code, sometimes i read and share my insight." cta="VIEW ALL MY INSIGHT" link="/article" />
      <div className="lg:w-[70%] flex justify-end lg:pt-0 pt-10">
        <div className="w-full relative lg:pt-16 lg:space-y-30 space-y-10">
          <HeaderSection text="- Valuable insights, exciting stories and other things worth sharing with the world." />

          <div className="lg:space-y-30 space-y-12">
            <ArticleMainCard />

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
