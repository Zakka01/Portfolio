"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Section2() {
    const [hoveredTitle, setHoveredTitle] = useState("");
    const [hoveredSubtitle, setHoveredSubtitle] = useState("");

    const items = [
        { src: "/assets/ParfPoster2.png", label: "SAILOR STATIC ", subtitle: "JEAN PAUL GAULTIER / PRINT ", w: "w-[22vw]", h: "h-[65vh]" },
        { src: "/assets/juice.png", label: "VITAL RIOT", subtitle: "VITAMONT / BILLBOARD SET", w: "w-[30vw]", h: "h-[43vh]" },
        { src: "/assets/5.png", label: "NOIR TEMPO", subtitle: "CHANEL / POSTER CAMPAIGN", w: "w-[30vw]", h: "h-[43vh]" },
        { src: "/assets/4.png", label: "HEAVY GLOW", subtitle: "BIGBEAR / OUTDOOR SERIES", w: "w-[22vw]", h: "h-[65vh]" },
    ];

    return (
        <section className="w-screen bg-black min-h-screen z-1 py-10 pt-60 relative">
            <h1 className="text-6xl text-end text-neutral-200 px-22 font-poly-neutral mix-blend-difference">
                Featured works
            </h1>

            {/* Fixed label overlay */}
            <AnimatePresence>
                {hoveredTitle && (
                    <motion.div
                        className="pointer-events-none fixed inset-0 z-9999 flex flex-col items-center justify-center text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ y: 30, filter: "blur(10px)" }}
                            animate={{ y: 0, filter: "blur(0px)" }}
                            exit={{ y: -30, filter: "blur(14px)" }}
                            transition={{ duration: 0.65, ease: [0.76, 0.1, 0.07, 1.0] }}
                            className="text-white text-[7vw] font-poly-median-mono font-bold mix-blend-darken uppercase tracking-tight"
                        >
                            {hoveredTitle}
                        </motion.div>

                        <motion.p
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -12, opacity: 0 }}
                            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-white/70 text-[0.65rem] uppercase tracking-[0.3em] mt-2 font-poly-neutral-mono"
                        >
                            {hoveredSubtitle}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-screen flex flex-col mt-20 gap-30">
                {/* Row 1 */}
                <div className="flex flex-row justify-between items-center px-30 gap-80">
                    <div
                        className={`group ${items[0].w} ${items[0].h} bg-neutral-400 cursor-pointer relative overflow-hidden`}
                        onMouseEnter={() => {
                            setHoveredTitle(items[0].label);
                            setHoveredSubtitle(items[0].subtitle);
                        }}
                        onMouseLeave={() => {
                            setHoveredTitle("");
                            setHoveredSubtitle("");
                        }}
                    >
                        <Image
                            src={items[0].src}
                            fill
                            alt=""
                            className="object-cover group-hover:scale-102 group-hover:grayscale-0 group-hover:brightness-85 duration-700"
                        />
                    </div>

                    <div
                        className={`group ${items[1].w} ${items[1].h} bg-neutral-400 cursor-pointer relative overflow-hidden`}
                        onMouseEnter={() => {
                            setHoveredTitle(items[1].label);
                            setHoveredSubtitle(items[1].subtitle);
                        }}
                        onMouseLeave={() => {
                            setHoveredTitle("");
                            setHoveredSubtitle("");
                        }}
                    >
                        <Image
                            src={items[1].src}
                            fill
                            alt=""
                            className="object-cover group-hover:scale-102 group-hover:grayscale-0 group-hover:brightness-85 duration-700"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-row justify-between items-end px-30 gap-80">
                    <div
                        className={`group ${items[2].w} ${items[2].h} bg-neutral-400 cursor-pointer relative overflow-hidden`}
                        onMouseEnter={() => {
                            setHoveredTitle(items[2].label);
                            setHoveredSubtitle(items[2].subtitle);
                        }}
                        onMouseLeave={() => {
                            setHoveredTitle("");
                            setHoveredSubtitle("");
                        }}
                    >
                        <Image
                            src={items[2].src}
                            fill
                            alt=""
                            className="object-cover group-hover:scale-102 group-hover:grayscale-0 group-hover:brightness-85 duration-700"
                        />
                    </div>

                    <div
                        className={`group ${items[3].w} ${items[3].h} bg-neutral-400 cursor-pointer relative overflow-hidden`}
                        onMouseEnter={() => {
                            setHoveredTitle(items[3].label);
                            setHoveredSubtitle(items[3].subtitle);
                        }}
                        onMouseLeave={() => {
                            setHoveredTitle("");
                            setHoveredSubtitle("");
                        }}
                    >
                        <Image
                            src={items[3].src}
                            fill
                            alt=""
                            className="object-cover pr-5 scale-125 group-hover:scale-128 group-hover:grayscale-0 group-hover:brightness-85 duration-700"
                        />
                    </div>
                </div>

                {/* Index */}
                <div className="flex flex-row justify-center items-center relative bottom-10 ml-80">
                    <h3 className="uppercase text-white text-xs px-1 font-poly-neutral-mono cursor-pointer">
                        See Index
                    </h3>
                </div>
            </div>
        </section>
    );
}