import { motion } from 'framer-motion';
import GradualBlur from './GradualBlur';

export default function Hero() {

    // Variants for h1 container and lines
    const h1ContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04, // Stagger each line
                delayChildren: 0, // H1 appears first
            },
        },
    };

    // Variants for p container and lines
    const pContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02, // Stagger each line
                delayChildren: 0.4, // Small text appears after h1
            },
        },
    };

    const lineVariants = {
        hidden: {
            opacity: 0,
            y: 25, // Appear from bottom
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.86, 0.0, 0.07, 1.0],
            },
        },
    };

    // Lines for the p text
    const pLines = [
        "Designing branding materials and advertising ",
        "visuals, with a sharp focus on social media and YouTube ",
        "thumbnails that actually convert"
    ];

    // Lines for the h1 text (preserving spans)
    const h1Lines = [
        { content: "Designing", className: "" },
        { content: <><span className='font-semibold'>clarity</span> <span className="text-neutral-500">in</span></>, className: "" },
        { content: <><span className="text-neutral-500"><span>noisy spaces</span></span></>, className: "" }
    ];

    return (
        <section className="flex flex-col z-1999">
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="border-l border-neutral-800/80"></div>
                ))}
            </div>

            <div className='w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-6 relative top-12 sm:top-16 md:top-20 lg:top-24 xl:top-29'>
                <div className='flex flex-row justify-end w-full h-full mb-4 sm:mb-6 md:mb-5'>
                    <motion.div
                        className='text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.55rem] text-left font-mono uppercase text-neutral-400 leading-relaxed'
                        variants={pContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {pLines.map((line, index) => (
                            <motion.span
                                key={index}
                                variants={lineVariants}
                                className={index === 0 ? "block indent-14" : "block"} // Indent only the first line
                            >
                                {line}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-start max-w-[1920px] mx-auto">
                    <motion.div
                        className="cursor-default font-medium text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[9rem] text-neutral-100 mix-blend-difference tracking-tight leading-[1.1] sm:leading-[1.15] md:leading-[0.85]"
                        variants={h1ContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {h1Lines.map((line, index) => (
                            <motion.span
                                key={index}
                                variants={lineVariants}
                                className="block"
                            >
                                {line.content}
                            </motion.span>
                        ))}
                    </motion.div>
                    {/* <button className='absolute cursor-pointer font-mono uppercase flex justify-center items-center left-[55%] bottom-30 h-30 w-30 rounded-full border border-neutral-400 text-neutral-400 mix-blend-difference overflow-hidden'>
                        Let's level up
                    </button>  */}
                </div>

                <GradualBlur
                    target="page"
                    position="bottom"
                    height="7rem"
                    strength={1}
                    divCount={5}
                    curve="bezier"
                    exponential
                    opacity={1}
                />
            </div>
        </section>
    );
}