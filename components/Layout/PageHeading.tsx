import HeaderSection from "../ui/HeaderSection";

type headingProps = {
  title: string;
  sub_title: string;
};

const PageHeading = ({ title, sub_title }: headingProps) => {
  return (
    <div className="h-[60vh] p-10 text-primary-gray flex lg:flex-row flex-col lg:items-end lg:justify-between justify-end gap-10 lg:gap-0 bg-primary-black">
      <div className="">
        <p>{title}</p>
      </div>
      <div className="w-[70%]">
        <HeaderSection text={sub_title} />
      </div>
    </div>
  );
};

export default PageHeading;
