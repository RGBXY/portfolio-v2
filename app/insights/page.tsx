import PageHeading from "@/components/Layout/PageHeading";
import InsightSection from "@/components/sections/InsightSection";

const page = () => {
  return (
    <div className="min-h-screen pb-[180px]">
      <PageHeading title="CURATED INSIGHTS" sub_title="I`ve gathered an exceptional selection of insightful content." />

      <InsightSection />
    </div>
  );
};

export default page;
