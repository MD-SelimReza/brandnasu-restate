'use client';

import { useEffect, useState } from 'react';

interface TypewriterWithSoundProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  delayAfterComplete?: number;
  soundSrc?: string;
  className?: string;
}

export default function TypewriterWithSound({
  text,
  speed = 100,
  deleteSpeed = 50,
  delayAfterComplete = 3000,
  className = '',
}: TypewriterWithSoundProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // Wait after complete typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayAfterComplete);
    } else if (isDeleting && index > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (isDeleting && index === 0) {
      // Restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, deleteSpeed, delayAfterComplete]);

  return (
    <div className={`${className} whitespace-pre-wrap`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
