"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type LinkItemProps = {
  title: string;
  link: string;
  target_blank?: boolean;
  className?: string | null;
};

const LinkUi = ({ title, link, className, target_blank = false }: LinkItemProps) => {
  const pathname = usePathname();

  return (
    <Link target={target_blank ? "_blank" : "_self"} className={`${className} ${pathname === link ? "text-accent-green" : ""} transition-all group relative w-fit`} href={link}>
      <span>{title}</span>
      <div className="absolute bottom-0.5 w-0 transition-all duration-400 group-hover:w-full h-[0.5px] bg-secondary-gray"></div>
    </Link>
  );
};

export default LinkUi;
