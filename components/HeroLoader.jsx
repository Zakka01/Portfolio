"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroLoader({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);
    const [textRevealed, setTextRevealed] = useState(false);

    useEffect(() => {
        // Start reveal animation immediately - no waiting
        const revealTimer = setTimeout(() => {
            setTextRevealed(true);
        }, 50);

        // Complete loading and hide loader - optimized timing
        const completeTimer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 300); // Faster fade out
        }, 3000); // Total duration: 2 seconds

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    
    const text = "You've Got the idea";
    const textVariants = {
        hidden: {
            opacity: 0,
            y: 20, // Slide from bottom
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.4, // Balanced duration
                ease: [0.86, 0.0, 0.07, 1.07], // Perfect easing
            },
        },
    };

    // Base variants for the buttons
    const baseBtnVariants = {
        hidden: {
            opacity: 0,
            y: 20, // Slide from bottom
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.4, // Balanced duration
                ease: [0.86, 0.0, 0.07, 1.07], // Perfect easing
            },
        },
    };

    // Variants for each button with delays
    const firstBtnVariants = {
        ...baseBtnVariants,
        visible: {
            ...baseBtnVariants.visible,
            transition: {
                ...baseBtnVariants.visible.transition,
                delay: 0.5, // Delay for first button
                duration: 0.9,
                ease: [0.86, 0.0, 0.07, 1.0]
            },
        },
    };
    
    const secondBtnVariants = {
        ...baseBtnVariants,
        visible: {
            ...baseBtnVariants.visible,
            transition: {
                ...baseBtnVariants.visible.transition,
                delay: 0.7, // Delay for second button
                duration: 0.9,
                ease: [0.86, 0.0, 0.07, 1.0]
            },
        },
    };
    
    const thirdBtnVariants = {
        ...baseBtnVariants,
        visible: {
            ...baseBtnVariants.visible,
            transition: {
                ...baseBtnVariants.visible.transition,
                delay: 0.9, // Delay for third button
                duration: 0.9,
                ease: [0.86, 0.0, 0.07, 1.0]
            },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-neutral-200 z-9999 grid grid-rows-5 select-none cursor-default"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.86, 0.0, 0.07, 1.0] }}
                >
                    <div className=''></div>
                    <div className='flex items-start pl-[10%]'>
                        <motion.button
                            variants={firstBtnVariants}
                            initial="hidden"
                            animate={textRevealed ? "visible" : "hidden"}
                            className='w-25 h-8 uppercase text-xs rounded-full cursor-pointer underline underline-offset-2 text-black'>
                            I've Got
                        </motion.button>
                    </div>
                    <div className="relative w-full flex items-center justify-center">
                        <motion.h1
                            className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[2.5rem] tracking-tight select-none text-center text-black"
                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                            variants={textVariants}
                            initial="hidden"
                            animate={textRevealed ? "visible" : "hidden"}
                        >
                            {text}
                        </motion.h1>
                    </div>
                    <div className='flex justify-end pr-[10%]'>
                        <motion.button
                            variants={secondBtnVariants}
                            initial="hidden"
                            animate={textRevealed ? "visible" : "hidden"}
                            className='w-25 h-8 uppercase text-xs mt-10 rounded-full cursor-pointer underline underline-offset-2 text-black'>
                            the
                        </motion.button>
                    </div>
                    <div className='flex justify-start pl-[20%]'>
                        <motion.button
                            variants={thirdBtnVariants}
                            initial="hidden"
                            animate={textRevealed ? "visible" : "hidden"}
                            className='w-25 h-8 uppercase text-xs rounded-full cursor-pointer underline underline-offset-2 text-black'>
                            Skills
                        </motion.button>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}