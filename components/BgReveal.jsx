"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef } from "react";

const GlobalBgWipe = forwardRef(function GlobalBgWipe({ targetRef }, ref) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"], 
  });

  // white fill grows as you scroll into the section
  const scaleY = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const shadowY = useTransform(scrollYProgress, [0, 0.35], [80, -40]);
  const shadowScale = useTransform(scrollYProgress, [0, 0.35], [0.4, 4.5]);

  return (
    <>
      {/* base black */}
      <div className="fixed inset-0 bg-black -z-20" />

      {/* white wipe */}
      <motion.div
        className="fixed inset-0 bg-white origin-bottom -z-10"
        style={{ scaleY }}
      />

      {/* blurred shadow edge */}
      <motion.div
        className="fixed left-0 right-0 bottom-0 h-40 bg-white blur-3xl opacity-80 -z-10"
        style={{ y: shadowY, scaleY: shadowScale }}
      />
    </>
  );
});

export default GlobalBgWipe;