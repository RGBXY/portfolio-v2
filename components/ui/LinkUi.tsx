import Link from "next/link";
import React from "react";

type LinkItemProps = {
  title: string;
  link: string;
  className?: string | null;
};

const LinkUi = ({ title, link, className }: LinkItemProps) => {
  return (
    <Link className={`${className} group relative`} href={link}>
      <span>{title}</span>
      <div className="absolute bottom-0.5 w-0 transition-all duration-400 group-hover:w-full h-[0.5px] bg-secondary-gray"></div>
    </Link>
  );
};

export default LinkUi;
