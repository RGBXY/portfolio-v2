import React from "react";
import SideContent from "../ui/SideContent";
import LinkUi from "../ui/LinkUi";
import { contactItems, linkMoreItems, linksNavItems } from "@/lib/linkItems";

const Footer = () => {
  return (
    <div className="relative pt-10 lg:pt-0 bg-primary-black text-gray-300 w-full ">
      <div className="flex lg:flex-row flex-col px-5 lg:px-10 pb-10 ">
        <SideContent theme="light" text="DROP ME A LINE, AND WE'LL GET IN TOUCH!" cta="SCHEDULE A CALL" link="/contact" />
        <div className="lg:w-[70%] flex lg:justify-end lg:pt-0 pt-10 ">
          <div className="w-fit relative lg:pt-16 lg:space-y-30 space-y-10">
            <div className="flex lg:justify-end gap-12 text-xs md:text-sm">
              {contactItems.map((item, index) => (
                <LinkUi key={index} link={item.link} title={item.title} />
              ))}
            </div>

            <div className="space-y-16">
              <div className="lg:text-6xl md:text-5xl text-2xl border-b w-fit border-b-secondary-gray pb-2 flex">
                <h1>DERRENAMADEO@GMAIL.COM</h1>
              </div>

              <div className="flex flex-col md:flex-row lg:justify-end items-start lg:text-end text-start lg:gap-20 md:gap-14 gap-10 flex-wrap">
                <div className="flex flex-col lg:items-end text-xs gap-2">
                  {/* <h1 className="font-semibold text-2xl">SAY HI?</h1> */}
                  <LinkUi title="+62 8521 0711 414" link="/" />
                  <p>Based in the island of Java, Indonesia</p>
                </div>

                <div className="flex flex-col gap-2">
                  {/* <h1 className="font-semibold text-2xl">LINK</h1> */}
                  <div className="flex flex-col lg:items-end gap-2 text-xs">
                    {linksNavItems.map((item, index) => (
                      <LinkUi key={index} link={item.link} title={item.title} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {/* <h1 className="font-semibold text-2xl">OTHER</h1> */}
                  <div className="flex flex-col lg:items-end gap-2 text-xs">
                    {linkMoreItems.map((item, index) => (
                      <LinkUi key={index} link={item.link} title={item.title} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-10 w-full flex flex-col lg:flex-row items-start lg:items-center text-xs justify-between text-gray-500">
                <h1>© ALL RIGHTS RESERVED, DERREN AMADEO 2025 </h1>
                <h1>LET`S MAKE YOUR IDEAS TO LIFE ❤️</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
