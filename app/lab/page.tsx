import PageHeading from "@/components/Layout/PageHeading";
import LabSection from "@/components/sections/LabSection";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen pb-[180px]">
      <PageHeading title="FRESH FROM THE OVEN" sub_title="I love to explore my front-end skills, i made a lab so i dont burn my house" />

      <LabSection />
    </div>
  );
};

export default page;
