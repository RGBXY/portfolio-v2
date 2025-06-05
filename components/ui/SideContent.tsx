import Link from "next/link";

type SideContentProps = {
  text: string;
  cta?: string | null;
  link?: string | null;
};

const SideContent = ({ text, cta, link }: SideContentProps) => {
  return (
    <div className="lg:w-[30%] space-y-4 h-fit text-sm lg:sticky top-0 lg:pt-16">
      <p className="md:text-sm text-xs uppercase w-[280px] lg:w-[250px] ">{text}</p>

      {cta !== null && (
        <Link href={link || "/"} className="w-full">
          <div className="relative group border-b border-primary-black w-fit lg:text-sm text-xs">
            <span className="font-bold">{cta}</span>
            <div className="absolute bottom-0 group-hover:bottom-0 w-0 group-hover:w-full h-[1px] bg-primary-black transition-all duration-500"></div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SideContent;
