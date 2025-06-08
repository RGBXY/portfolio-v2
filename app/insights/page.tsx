import PageHeading from "@/components/Layout/PageHeading";
import ArticleCard from "@/components/ui/ArticleCard";
import ArticleFIlter from "@/components/ui/ArticleFIlter";
import ArticleMainCard from "@/components/ui/ArticleMainCard";
import SideContent from "@/components/ui/SideContent";
import { articleCardsItems } from "@/lib/constants";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen pb-[180px]">
      <PageHeading title="CURATED INSIGHTS" sub_title="I`ve gathered an exceptional selection of insightful content." />

      <div className="pb-30 section-container ">
        <SideContent text="UNVEIL YOUR DREAM, AND LET DESIGN WEAVE ITS MAGIC INTO REALITY’S SEAM." />
        <div className="lg:w-[70%]  flex justify-end lg:pt-0 pt-10">
          <div className="w-full relative lg:pt-16 lg:space-y-40 space-y-10">
            <ArticleMainCard />
          </div>
        </div>
      </div>

      <div className="lg:ps-10">
        <ArticleFIlter />

        <div className="lg:ps-10 space-y-8">
          {articleCardsItems.map((item, index) => (
            <ArticleCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
