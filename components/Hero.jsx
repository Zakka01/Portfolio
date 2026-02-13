import GradualBlur from './GradualBlur';
import Threads from './Threads'


export default function Hero() {

    return (
        <section className="flex flex-col">
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="border-l border-neutral-800/80"></div>
                ))}
            </div>


            <div className='w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-6 relative top-12 sm:top-16 md:top-20 lg:top-24 xl:top-22'>
                <div className='flex flex-row justify-end w-full h-full mb-4 sm:mb-6 md:mb-10'>
                    <p className='text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.6rem] max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[22%] 2xl:max-w-[65%] text-right font-mono uppercase text-neutral-400 leading-relaxed'>
                        Designing branding materials and advertising visuals, with a sharp focus on social media and YouTube thumbnails that actually convert
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-start max-w-[1920px] mx-auto">
                    <h1 className="cursor-default font-medium text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[9rem] text-neutral-100 mix-blend-difference tracking-tight leading-[1.1] sm:leading-[1.15] md:leading-[0.85]">
                        Designing <br /><span className='font-semibold'>clarity</span> <span className="text-neutral-500"> in <br /> <span>noisy spaces</span></span>
                    </h1>
                    <button className='absolute cursor-pointer font-mono uppercase flex justify-center items-center left-[55%] bottom-38 h-20 w-64 rounded-full border border-neutral-400 bg-fuchsia-800 text-neutral-400'>

                    </button>
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