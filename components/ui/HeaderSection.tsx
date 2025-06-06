type headerProps = {
  text: string;
};

const HeaderSection = ({ text }: headerProps) => {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl lg:max-w-[800px] md:max-w-[700px] lg:ps-10 lg:leading-14">{text}</h1>
    </div>
  );
};

export default HeaderSection;
