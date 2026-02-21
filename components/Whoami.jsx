"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section2() {
    return (
        <section>
            <section className="w-screen bg-black h-screen z-1999 py-20 px-3">
                <div className="grid grid-cols-2 w-full pl-10">
                    {/* text */}
                    <div className="text-white">
                        <h1 className="text-4xl font-polysansbulky tracking-tight">
                            I'am Ahrabare Zakariae
                        </h1>
                    </div>
                    {/* pic */}
                    <div className="relative ml-30 h-[80vh] w-[60%] overflow-hidden">
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
