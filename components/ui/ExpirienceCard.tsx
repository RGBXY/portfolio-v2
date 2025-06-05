import Image from "next/image";
import Link from "next/link";
import React from "react";

type ExperienceItem = {
  company: string;
  title: string;
  link: string;
  image: string;
  duration: string;
  description: string;
};

type ExperienceCardProps = {
  data: ExperienceItem;
  index: number;
  dataLength: number;
};

const ExperienceCard = ({ data, index, dataLength }: ExperienceCardProps) => {
  return (
    <div className="flex gap-10 pb-10 ps-10">
      <div className="relative flex flex-col mt-4">
        <div className={`${dataLength === 1 ? "hidden" : "flex"} absolute items-center justify-center left-1 top-0 rounded-full border-2 border-primary-black h-5 w-5`}>
          <div className="z-10 rounded-full h-3 w-3 bg-primary-black"></div>
        </div>
        <div className={`${index + 1 === dataLength ? "" : "w-[1px] h-[calc(100%+40px)] caret-black bg-gray-300 absolute top-5 left-[13px]"}`}></div>
      </div>

      <div className="flex w-[35%] gap-4">
        <div className="shrink-0 rounded-xl h-12 w-12 bg-white border border-gray-300 flex items-center justify-center overflow-hidden relative">
          <Image className="" fill alt={data.company} src={data.image} />
        </div>
        <div className="text-start pt-2 space-y-1">
          <Link href={data.link} target="_blank">
            <h1 className="text-xl font-bold hover:text-gray-700 transition-all">{data.company}</h1>
          </Link>
          <p className="font-semibold text-gray-500">{data.duration}</p>
        </div>
      </div>
      <div className="flex-1 text-start space-y-1 pt-2">
        <h1 className="text-xl font-bold">{data.title}</h1>
        <p className="text-gray-500 ">{data.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
