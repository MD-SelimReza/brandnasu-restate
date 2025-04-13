import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
