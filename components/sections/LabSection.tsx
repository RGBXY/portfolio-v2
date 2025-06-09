import SideContent from "../ui/SideContent";
import HeaderSection from "../ui/HeaderSection";

const LabSection = () => {
  return (
    <div>
      <div className="pb-30 section-container ">
        <SideContent text="UNVEIL YOUR DREAM, AND LET DESIGN WEAVE ITS MAGIC INTO REALITY’S SEAM." />
        <div className="lg:w-[70%]  flex justify-end lg:pt-0 pt-10">
          <div className="w-full relative lg:pt-16 lg:space-y-40 space-y-10">
            <HeaderSection text="halo" />
          </div>
        </div>
      </div>

      {/* <div className="lg:px-10 px-5 space-y-10">
        <div className="flex flex-wrap lg:gap-x-8 gap-x-6 gap-y-4 text-2xl items-center">
          {articleFilterLink.map((item) => (
            <div key={item.id} onClick={() => filterArticle(item.slug)} className={`${selectedCategory == item.slug ? "border-primary-black text-black" : "text-gray-400 border-b-gray-400"} cursor-pointer border-b leading-6 `}>
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {articleData.map((item, index) => (
            <ArticleCard key={index} data={item} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default LabSection;
