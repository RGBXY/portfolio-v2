import Link from "next/link";

type SideContentProps = {
  text: string;
  cta?: string | null;
  link?: string | null;
  theme?: string | "light";
};

const SideContent = ({ text, cta, link, theme }: SideContentProps) => {
  return (
    <div className={`${cta == null ? "" : "space-y-4"} lg:w-[30%] h-fit text-sm lg:sticky top-0 lg:pt-16`}>
      <p className="md:text-sm text-xs uppercase w-[280px] lg:w-[250px] ">{text}</p>

      {cta !== null && (
        <Link href={link || "/"} className="w-full h-1  mb-4">
          <div className={`${theme === "light" ? "border-primary-gray" : "border-primary-black"} relative group border-b w-fit lg:text-sm text-xs`}>
            <span className="font-bold">{cta}</span>
            <div className={`${theme === "light" ? "bg-primary-gray" : "bg-primary-black"} absolute bottom-0 group-hover:bottom-0 w-0 group-hover:w-full h-[1px] bg-primary-black transition-all duration-500`}></div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SideContent;
