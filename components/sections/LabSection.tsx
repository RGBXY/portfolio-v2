import LabCard from "../cards/LabCard";
import SideContent from "../ui/SideContent";

const LabSection = () => {
  return (
    <div>
      <div className="pb-30 section-container ">
        <SideContent text="This is my experiment lab - I hope my mistakes don't make your device explode!" />
        <div className="lg:w-[70%] lg:ps-10 flex flex-col gap-4 lg:pt-16 pt-10">
          <p className="uppercase">Stay tune for next update</p>
          <div className="w-full relative flex flex-wrap lg:justify-start justify-center gap-5">
            <LabCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabSection;
