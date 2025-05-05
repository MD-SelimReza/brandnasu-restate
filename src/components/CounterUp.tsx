"use client";

import { useEffect, useState } from "react";
import { useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CounterUpProps {
  target: number;
  duration?: number;
  className?: string;
}

export default function CounterUp({ target, duration = 2, className = "" }: CounterUpProps) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayCount(Math.floor(latest));
        },
      });

      return () => controls.stop();
    } else {
      setDisplayCount(0); // Reset when out of view if needed
      count.set(0);
    }
  }, [inView, count, target, duration]);

  return (
    <div ref={ref} className={className}>
      {displayCount}
    </div>
  );
}
