import React from "react";

const BarLoader: React.FC = () => {
  return (
    <div className="w-24 h-[6px] bg-gray-200 rounded overflow-hidden">
      <div className="bar-loader h-full bg-black animate-bar-loader"></div>
    </div>
  );
};

export default BarLoader;
