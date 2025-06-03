import Link from "next/link";
import React from "react";

type LinkItemProps = {
  title: string;
  link: string;
};

const LinkUi = ({ title, link }: LinkItemProps) => {
  return (
    <Link className="group relative" href={link}>
      <span>{title}</span>
      <div className="absolute bottom-0.5 w-0 transition-all duration-400 group-hover:w-full h-[0.5px] bg-secondary-gray"></div>
    </Link>
  );
};

export default LinkUi;
