import PageHeading from "@/components/Layout/PageHeading";
import HeaderSection from "@/components/ui/HeaderSection";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import SideContent from "@/components/ui/SideContent";

const page = () => {
  return (
    <div className="min-h-screen pb-[180px]">
      <PageHeading title="CURATED WORKS" sub_title="We`ve gathered an exceptional selection of insightful content." />

      <div className="section-container ">
        <SideContent text="IN OUR DESIGN STAGE, PRODUCTIVITY TAKES CENTER STAGE, AND REVENUE APPLAUDS ITS ENCORE." />
        <div className="lg:w-[70%]  flex justify-end lg:pt-0 pt-10">
          <div className="w-full relative lg:pt-16 lg:space-y-40 space-y-10">
            <HeaderSection text="— Solutions That Speak Louder Than Words!" />
          </div>
        </div>
      </div>

      <HorizontalScroll />
    </div>
  );
};

export default page;
