import Image from "next/image";
import Link from "next/link";

type cardProjectItems = {
  title: string;
  sub_title: string;
  image: string;
  link: string;
};

type cardWorkProp = {
  dataProject: cardProjectItems;
  style: React.CSSProperties;
};

const CardWork = ({ dataProject, style }: cardWorkProp) => {
  return (
    <Link href={dataProject.link}>
      <div style={style} className="h-screen group lg:px-10 px-5">
        <div className="w-full h-full flex gap-10 pt-10 pb-14">
          <p className="text-xs">.01</p>
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center w-full">
              <div>
                <h1 className="lg:text-7xl md:text-5xl text-4xl">{dataProject.title}</h1>
                <p className="lg:text-base text-xs">{dataProject.sub_title}</p>
              </div>
              <div className="group-hover:-rotate-45 z-10 lg:h-7 h-5 transition-all duration-500">
                <Image src="/icon/arrowRight.svg" alt="arrowRight" className="object-cover w-full h-full" width={40} height={40} />
              </div>
            </div>
            <div className="bg-accent-green aspect-3/2 rounded-xl overflow-hidden">
              <Image src={dataProject.image} alt={dataProject.title} className="object-cover w-full h-full" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardWork;
