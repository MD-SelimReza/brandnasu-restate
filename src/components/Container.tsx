import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 xl:px-24">
      {children}
    </div>
  );
};

export default Container;
