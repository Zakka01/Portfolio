import GradualBlur from './GradualBlur';


export default function Hero() {

    return (
        <section className="w-full h-full px-8 md:px-10 relative top-12">
            <div className="max-w-[1920px] mx-auto pt-15">
                <h1 className="cursor-default text-[8rem] text-neutral-200 mix-blend-difference w-[70%] tracking-tight leading-26">
                    Designing clarity <span className="text-neutral-500"> in noisy spaces.</span>
                </h1>
            </div>
            <div className='flex flex-row justify-between w-full px-0 pt-18 h-full'>
                <button className='uppercase cursor-pointer text-[0.65rem] border text-neutral-100 border-neutral-400 px-10 rounded-full'>
                    let’s connect w/ me
                </button>
                <p className='text-[0.7rem] w-80 text-right uppercase text-neutral-400'>Designing branding materials and advertising visuals, with a sharp focus on social media and YouTube thumbnails that actually convert.</p>

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
        </section>
    );
}