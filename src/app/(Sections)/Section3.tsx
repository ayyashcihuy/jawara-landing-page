"use client";

import ContentCarousel, { ProductContent } from "@/components/ContentCarousel/ContentCarousel";
import { motion } from "framer-motion";

const contentCarousel: ProductContent[] = [
    {
        title: "SKS Living 5 BR",
        image: "/assets/images/img-1.svg",
        description: ["Dalam setiap 1 unit rumah kost, terdapat total 5 kamar kost fully furnished yang siap disewakan dan 1 carport", "Terdiri dari 3 kamar kost di lantai 1 dan 2 kamar kost di lantai 2", "Semua kamar kost dilengkapi dengan AC dan water heater di kamar mandi"]
    },
    {
        title: "SKS Living 6 BR",
        image: "/assets/images/img-2.svg",
        description: ["Dalam setiap 1 unit rumah kost, terdapat total 6 kamar kost fully furnished yang siap disewakan dan 1 carport", "Terdiri dari 3 kamar kost di lantai 1 dan 3 kamar kost di lantai 2", "Semua kamar kost dilengkapi dengan AC dan water heater di kamar mandi"]
    },
    {
        title: "SKS Living 7 BR",
        image: "/assets/images/img-3.svg",
        description: ["Dalam setiap 1 unit rumah kost, terdapat total 5 kamar kost fully furnished yang siap disewakan dan 1 carport", "Terdiri dari 3 kamar kost di lantai 1 dan 4 kamar kost di lantai 2", "Semua kamar kost dilengkapi dengan AC dan water heater di kamar mandi"]
    }
]

export default function Section3() {

    return (
        <motion.section
            variants={{
                hidden: { opacity: 0, y: 100},
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.25,
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]            
                    },
                    y: 0,
                }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="xl:mt-6 mt-0 flex flex-col gap-y-10 xl:p-10 xl:py-16 p-5 items-center justify-center"
        >
            {
                contentCarousel && contentCarousel.length > 0 ? 
                    contentCarousel.map((item, index) => {
                        return (
                            <motion.div key={index} variants={{ hidden: {opacity: 0}, show: {opacity: 1}}}>
                                <ContentCarousel key={index} content={item} />
                            </motion.div>
                        )
                    })
                : null
            }
        </motion.section>
    )
}