import { articleFilterLink } from "@/lib/constants";
import React from "react";

const ArticleFIlter = () => {
  return (
    <div className="flex gap-8 text-2xl items-center">
      {articleFilterLink.map((item) => (
        <div className="border-b leading-6 border-primary-black" key={item.id}>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ArticleFIlter;
