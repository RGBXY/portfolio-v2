import React from "react";
import LinkUi from "../ui/LinkUi";
import { linksNavItems } from "@/lib/linkItems";

const Navbar = () => {
  return (
    <div className="fixed z-40 h-12.5 border-b border-b-secondary-gray text-sm text-secondary-gray bg-primary-black/95 backdrop-blur-md w-full flex items-center justify-between px-5 lg:px-10">
      <h1 className="font-semibold text-2xl text-white">rgbxy</h1>
      <div className="lg:flex items-center gap-14 hidden">
        {linksNavItems.map((item, index) => (
          <LinkUi key={index} title={item.title} link={item.link} />
        ))}
      </div>
      <LinkUi title="CONTACT" link="/contact" />
    </div>
  );
};

export default Navbar;
