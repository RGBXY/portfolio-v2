import React from "react";
import Album from "../lab/Album";

const LabCard = () => {
  return (
    <div className="p-2 bg-white rounded-3xl md:w-[calc(50%-10px)] w-full border-2 border-gray-300 border-dashed shadow min-h-80 flex items-center justify-center">
      <Album />
    </div>
  );
};

export default LabCard;
