"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed z-100 w-full px-8 md:px-12 lg:px-5 mix-blend-difference">
      <div className="flex items-center justify-between max-w-[1920px] mx-auto">
        <div className="cursor-pointer pt-6 text-lg md:text-xl uppercase font-medium font-mono text-white tracking-tight translate-y-[-0.15rem] w-148 border-b border-neutral-700 pl-2 pb-2">
          <Image src="/assets/ZackA.svg"  width={75} height={75} alt="logo" className="pb-1.5"/>
        </div>
        <div className="flex items-center font-mono gap-2 md:gap-4 lg:gap-4">
          {/* Whoami */}
          <div className="relative border-b border-neutral-800 hover:border-neutral-600 transitio-all duration-400 pt-2 pb-4 w-45">
            <a href="#whoami" className="pt-2 relative flex items-center gap-2 text-[0.7rem] md:text-[0.6rem] uppercase text-neutral-300 font-semibold tracking-wide group">
              <span className="w-2 h-2 rounded-full border border-neutral-600 mr-4 group-hover:h-0 group-hover:w-0 group-hover:opacity-0 duration-200"></span>
              <span className="group-hover:-translate-x-6 duration-400 transition ease-out">WHOAMI</span>
              <span className="absolute translate-x-18 w-0 h-0 rounded-full bg-white group-hover:translate-x-14 group-hover:h-7 group-hover:w-7 duration-300 overflow-hidden flex items-center justify-center">
                <Image src="/assets/arrow.png" width={14} height={14} alt="Arrow" className="opacity-5 group-hover:opacity-100 -rotate-40 transition-opacity duration-500" />
              </span>
            </a>
          </div>
          {/* Work */}
          <div className="relative border-b border-neutral-800 hover:border-neutral-600 duration-400 pt-2 pb-4 w-45">
            <a href="#work" className="pt-2 relative flex items-center gap-2 text-[0.7rem] md:text-[0.6rem] uppercase text-neutral-300 font-semibold tracking-wide group">
              <span className="w-2 h-2 rounded-full border border-neutral-600 mr-4 group-hover:h-0 group-hover:w-0 group-hover:opacity-0 duration-200"></span>
              <span className="group-hover:-translate-x-6 duration-400 transition ease-out">WORKS</span>
              <span className="absolute translate-x-18 w-0 h-0 rounded-full bg-white group-hover:translate-x-14 group-hover:h-7 group-hover:w-7 duration-300 overflow-hidden flex items-center justify-center">
                <Image src="/assets/arrow.png" width={14} height={14} alt="Arrow" className="opacity-5 group-hover:opacity-100 -rotate-40 transition-opacity duration-500" />
              </span>
            </a>
          </div>
          {/* Connect */}
          <div className="relative border-b border-neutral-800 hover:border-neutral-600 duration-400 pt-2 pb-4 w-60">
            <a href="#connect" className="pt-2 relative flex items-center gap-2 text-[0.7rem] md:text-[0.6rem] uppercase text-neutral-300 font-semibold tracking-wide group">
              <span className="w-2 h-2 rounded-full border border-neutral-600 mr-4 group-hover:h-0 group-hover:w-0 group-hover:opacity-0 duration-200"></span>
              <span className="group-hover:-translate-x-6 duration-400 transition ease-out">LET&apos;S CONNECT W/ ME</span>
              <span className="absolute translate-x-38 w-0 h-0 rounded-full bg-white group-hover:translate-x-34 group-hover:h-7 group-hover:w-7 duration-300 overflow-hidden flex items-center justify-center">
                <Image src="/assets/arrow.png" width={14} height={14} alt="Arrow" className="opacity-5 group-hover:opacity-100 -rotate-40 transition-opacity duration-500" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
