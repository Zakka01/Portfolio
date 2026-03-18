"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function Footer() {
  const [hover, setHover] = useState(false);

  // magnetic follow (smooth spring)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.4 });

  return (
    <section>
      <section className="w-full flex flex-col bg-black mb-20 pt-20 items-center relative">
        <div
          className="leading-60"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseMove={(e) => {
            // magnet offset
            x.set(e.clientX + 18);
            y.set(e.clientY - 18);
          }}
        >
          <h1 className="text-[15rem] pr-5 font-poly-neutral tracking-tighter cursor-pointer">
            Get in touch
          </h1>
        </div>

        {/* Hover badge */}
        <AnimatePresence>
          {hover && (
            <motion.div
              className="fixed z-9999 pointer-events-none px-1 py-0 bg-neutral-100 text-black text-xs uppercase tracking-wider font-mono"
              style={{ left: springX, top: springY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Let’s talk
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-63 mt-10 uppercase text-xs font-extralight text-neutral-400 font-mono flex flex-col justify-center gap-6">
          <div className="">
            <div className="flex items-center gap-2 cursor-pointer group">
              <p className="hover:text-neutral-200">instagram</p>
              <Image
                src="/assets/right-arrow.png"
                alt="arrow"
                width={12}
                height={12}
                className="-rotate-45 opacity-70 group-hover:opacity-90"
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <p className="hover:text-neutral-200">linkedin</p>
              <Image
                src="/assets/right-arrow.png"
                alt="arrow"
                width={12}
                height={12}
                className="-rotate-45 opacity-70 group-hover:opacity-90"
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <p className="hover:text-neutral-200">behance</p>
              <Image
                src="/assets/right-arrow.png"
                alt="arrow"
                width={12}
                height={12}
                className="-rotate-45 opacity-70 group-hover:opacity-90"
              />
            </div>
          </div>

          <div className="">
            <p>
              Designed by_
              <span className="text-neutral-300 font-light cursor-pointer">
                Zakariae A.
              </span>
            </p>
            <p>
              Developed by_
              <span className="text-neutral-300 font-light cursor-pointer">
                Zakka01
              </span>
            </p>
          </div>

          <div>
            <p className="">©2026_all rights reserved</p>
          </div>
        </div>
      </section>
    </section>
  );
}