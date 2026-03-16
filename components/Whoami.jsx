"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section2() {
    return (
        <section>
            <section className="w-screen bg-black min-h-screen z-1999 py-10 px-3">
                <div className="grid grid-cols-2 w-full pl-20">
                    {/* text */}
                    <div className="text-white flex flex-col gap-5">
                        <h1 className="text-[2.4rem] font-poly-neutral tracking-tight">
                            Ahrabare Zakariae
                        </h1>
                        <div className="flex flex-col gap-13 text-lg text-neutral-400">
                            <p className="max-w-xs mx-3 text-justify font-poly-neutral">
                                Design, to me, is not decoration. It is communication. Every brand carries a story, a vision, and a purpose. My work is about translating that identity into visual language, shapes, colors, and compositions that speak before a single word is read.
                            </p>
                            <p className="max-w-xs mx-3 text-justify font-poly-neutral">
                                I approach design with a balance between aesthetics and intention. A visual should not only look good; it should guide attention, create emotion, and leave a lasting impression.
                            </p>
                            <p className="max-w-xs mx-3 text-justify font-poly-neutral">
                                Through social media design and digital campaigns, I help brands present themselves with clarity and character in a fast-moving digital world.

                                Because in the end, great design is not about adding more — it is about revealing what truly matters.
                            </p>
                        </div>
                    </div>
                    {/* pic */}
                    <div className="sticky ml-20 h-[70vh] w-[50%] overflow-hidden">
                        <Image
                            src="/assets/me.png"
                            fill
                            className="object-cover hover:scale-110 duration-400 grayscale"
                            alt="me"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}
