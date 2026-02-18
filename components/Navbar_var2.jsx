"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, stagger } from 'framer-motion';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [textRevealed, setTextRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        const textTimer = setTimeout(() => {
            setTextRevealed(true);
        }, 1200); // Delay the text reveal after nav appears
        return () => {
            clearTimeout(timer);
            clearTimeout(textTimer);
        };
    }, []);

    const logoVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { 
                duration: 1, 
                ease: [0.86, 0.0, 0.07, 1.07] 
            } 
        },
    };

    const linkVariants = {
        hidden: { 
            x: -10, 
            opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { 
                duration: 1, 
                ease: [0.86, 0.0, 0.07, 1.07] 
            } 
        },
    };

    const letsTalkVariants = {
        hidden: { x: 20, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { 
                duration: 1, 
                ease: [0.86, 0.0, 0.07, 1.07] 
            } 
        },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0, // Stagger each text block
            },
        },
    };

    return (
        <motion.nav
            className="fixed z-100 w-full px-8 md:px-12 lg:px-5 mix-blend-difference top-4"
            transition={{ duration: 3, ease: [0.86, 0.0, 0.07, 1.07] }}
        >
            <motion.section 
                className="flex flex-row gap-22 justify-between items-start max-w-[1920px] mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={textRevealed ? "visible" : "hidden"}
            >
                <motion.div className="cursor-pointer mix-blend-difference text-white uppercase text-xs w-[20%]" variants={logoVariants}>
                    <p>Zack A.</p>
                </motion.div>
                <motion.div
                    className="flex flex-col text-left gap-0.5 mix-blend-difference text-white uppercase text-[0.65rem] w-[60%] overflow-hidden"
                >
                    <motion.a href="" className="text-neutral-300 w-fit hover:text-white" variants={linkVariants}>01/ hey</motion.a>
                    <motion.a href="" className="text-neutral-300 w-fit hover:text-white" variants={linkVariants}>02/ whoami</motion.a>
                    <motion.a href="" className="text-neutral-300 w-fit hover:text-white" variants={linkVariants}>03/ Works</motion.a>
                </motion.div>

                <motion.div className="mix-blend-difference cursor-pointer text-white uppercase text-xs w-[20%] text-right" variants={letsTalkVariants}>
                    <p>Let's talk</p>
                </motion.div>
            </motion.section>
        </motion.nav>
    );
}