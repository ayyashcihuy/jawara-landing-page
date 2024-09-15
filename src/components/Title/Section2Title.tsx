"use client";

import { motion } from "framer-motion";
import { Della_Respira } from "next/font/google";

const della_respira = Della_Respira({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
});  

export default function Section2Title() {
    return (
        <motion.div 
            className="flex flex-col gap-y-3 w-full items-center"
            initial={{
                opacity: 0 
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 0.8,
                delay: 0.2,
            }}
            viewport={{ once: true }}
        >
            <div className="font-bold text-[36px] text-center">
                <h1 className={della_respira.className}>Kenapa Harus Milih SKS?</h1>
            </div>
            <p className="text-center">
                SKS Living memiliki 6 keunggulan yang dapat menunjang kehidupan kamu
            </p>
        </motion.div>
    )
}