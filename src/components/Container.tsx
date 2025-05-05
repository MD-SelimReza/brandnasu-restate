import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-5 py-8 lg:py-12 xl:py-20">
      {children}
    </div>
  );
};

export default Container;
