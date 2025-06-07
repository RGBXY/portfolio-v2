import Image from "next/image";

type ArticleCardItem = {
  title: string;
  sub_title: string;
  image: string;
};

type ArticleCardProps = {
  data: ArticleCardItem;
};

const ArticleCard = ({ data }: ArticleCardProps) => {
  return (
    <div className="border-b relative border-gray-500 group lg:pb-8 pb-6 flex items-center justify-between gap-6 lg:gap-12">
      <div className="flex md:flex-row flex-col md:items-center items-start gap-6 lg:gap-12">
        <div className="lg:w-[200px] lg:h-[155px] w-[180px] h-[135px] group-hover:scale-98 transition-all rounded-lg overflow-hidden">
          <Image src={data.image} className="w-full h-full object-cover" alt="how to work with me" width={200} height={200} />
        </div>
        <div className="flex-1 lg:space-y-3 space-y-2 ">
          <h1 className="lg:text-40 md:text-3xl text-2xl lg:leading-11 md:leading-9 leading-7">{data.title}</h1>
          <p className="text-xs">{data.sub_title}</p>
        </div>
      </div>
      <div className="group-hover:-rotate-45 z-10 h-5 transition-all duration-500">
        <Image src="/icon/arrowRight.svg" alt="arrowRight" className="object-cover w-full h-full" width={40} height={40} />
      </div>
      <div className="absolute bottom-0 group-hover:bottom-0 w-0 group-hover:w-full h-[1px] bg-primary-black transition-all duration-500"></div>
    </div>
  );
};

export default ArticleCard;
