'use client';

import React, { useState, useEffect } from 'react';

const fullText = 'Why This Course?';

const WhyThisCourse = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="relative p-8 rounded-xl bg-[#0e0e24] text-white text-center overflow-hidden border-2 border-transparent before:absolute before:inset-[-2px] before:bg-gradient-to-r before:from-purple-500 before:via-indigo-500 before:to-purple-500 before:rounded-xl before:z-[-1] before:animate-gradient-move">
      <h1 className="text-3xl font-bold text-violet-100">
        {displayedText}
        <span className="inline-block animate-blink">|</span>
      </h1>
    </div>
  );
};

export default WhyThisCourse;
