"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function HeroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [slideUp, setSlideUp] = useState(false);

  const y = useMotionValue(150); // start below

  useEffect(() => {
    // move the number up smoothly (bottom -> top)
    const controls = animate(y, 0, {
      duration: 1.3,
      ease: [0.86, 0.0, 0.07, 1.0],
      onUpdate: (latest) => {
        // map y position to steps
        if (latest > 55) setProgress(0);
        else if (latest > 35) setProgress(22);
        else if (latest > 15) setProgress(77);
        else setProgress(100);
      },
    });

    // slide whole loader up after count finishes
    const finishTimer = setTimeout(() => {
      setSlideUp(true);
      setTimeout(() => onComplete?.(), 1100);
    }, 2000);

    return () => {
      controls.stop();
      clearTimeout(finishTimer);
    };
  }, [onComplete, y]);

  return (
    <motion.div
      className="fixed inset-0 z-9999 overflow-hidden bg-white"
      initial={{ y: 0 }}
      animate={{ y: slideUp ? "-100%" : 0 }}
      transition={{ duration: 1.2, ease: [0.86, 0.0, 0.07, 1.0] }}
    >
      {/* top text */}
      <div className="absolute text-black w-full top-15 flex flex-col items-start gap-1 px-10 uppercase">
        <p className="text-[2.5rem] font-poly-median font-semibold tracking-tighter leading-8">
          Zakariae Ahrabare
        </p>
        <p className="text-[2.5rem] indent-2 font-poly-median font-semibold tracking-tighter leading-8">
        — Portfolio ©2026
        </p>
      </div>

      {/* percentage (moves up via translate-y) */}
      <div className="absolute text-black w-full bottom-9 flex items-end justify-end font-poly-neutral px-10">
        <motion.div
          style={{ y }}
          className="text-[8rem] leading-none"
        >
          {progress}
        </motion.div>
      </div>
    </motion.div>
  );
}