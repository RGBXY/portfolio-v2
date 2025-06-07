"use client";

import { useState } from "react";
import LinkUi from "../ui/LinkUi";
import { contactItems, linksNavItems } from "@/lib/linkItems";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-40 h-12.5 border-b border-b-secondary-gray text-sm text-secondary-gray bg-primary-black/95 backdrop-blur-md w-full flex items-center justify-between px-5 lg:px-10">
      <Link href="/">
        <h1 className="font-semibold text-2xl text-white">rgbxy</h1>
      </Link>

      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } lg:w-auto lg:bg-transparent transition-all duration-400 flex lg:items-center lg:flex-row lg:static lg:text-sm lg:h-auto lg:p-0 absolute h-screen w-full bg-primary-black -z-2 top-0 flex-col items-end px-4 py-24 text-6xl lg:gap-14 gap-2`}
      >
        {linksNavItems.map((item, index) => (
          <LinkUi key={index} title={item.title} link={item.link} />
        ))}

        <div className="mt-8 flex flex-col items-end text-xl gap-2 lg:hidden">
          {contactItems.map((item, index) => (
            <LinkUi key={index} title={item.title} link={item.link} />
          ))}
        </div>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
};

export default Navbar;
