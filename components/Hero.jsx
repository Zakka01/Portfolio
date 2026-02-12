import GradualBlur from './GradualBlur';
import Threads from './Threads'


export default function Hero() {

    return (
        <section className="flex flex-col">
            <div className='w-full h-full px-8 md:px-4 relative top-28'>
                <div className='flex flex-row justify-end w-full h-full'>
                    <p className='text-[0.65rem] w-75 text-right font-mono uppercase text-neutral-400'>Designing branding materials and advertising visuals, with a sharp focus on social media and YouTube thumbnails that actually convert</p>
                </div>
                <div className="flex flex-row items-end justify-start max-w-[1920px] mx-auto pt-14">
                    <h1 className="cursor-default font-medium text-[9rem] text-neutral-100 mix-blend-difference tracking-tight leading-30">
                        Designing <br /> clarity <span className="text-neutral-500 font-mono"> in <br/> noisy spaces</span>
                    </h1>
                    <button className='absolute cursor-pointer font-mono uppercase flex justify-center items-center left-[54%] bottom-34 h-16 w-70 border border-neutral-400 text-neutral-400 hover:tracking-wider duration-300 hover:text-neutral-100'>
                        let's connect w/ me
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