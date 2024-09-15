"use client";

import ContentSection4 from "@/components/ContentCarousel/ContentSection4";
import { motion } from "framer-motion"

export type Content = {
    id: number;
    title: string;
    description: string;
    feature: string[];
}

const content: Content[] = [
    {
        id: 1,
        title: "Fasilitas Area Kawasan",
        description: "SKS Living memiliki area kawasan dengan fasilitas yang dapat memenuhi kehidupan penghuni",
        feature: [
            "Lahan Parkir",
            "One Gate System",
            "Laundry Pakaian",
            "CCTV 24 Jam",
            "Security 24 Jam",
            "Taman Terbuka",
            "Restoran",
            "Cafe"
        ]
    },
    {
        id: 2,
        title: "Fasilitas Kamar",
        description: "SKS Living memiliki area kawasan dengan fasilitas yang dapat memenuhi kehidupan penghuni",
        feature: [
            "1 Set Tempat Tidur",
            "1 Set Sprei",
            "1 Set Meja Belajar",
            "Kamar Mandi Dalam",
            "Water Heater",
            "Air Conditioner",
            "Lemari Baju",
            "Smart Door Lock",
            "Gorden"
        ]
    }
]

export default function Section4() {
    return (
        <div className="mt-6 flex flex-col gap-y-10 p-10 py-16 items-center w-full min-h-screen bg-white">
            {
                content && content.length > 0 ? 
                content.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: index % 2 == 0 ? { opacity: 0, x: -100} : { opacity: 0, x: 100},
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.25,
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: [0, 0.71, 0.2, 1.01]            
                                    },
                                    x: 0,
                                }
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <ContentSection4 key={index} content={item} />
                        </motion.div>
                    )
                })
                : null
            }
        </div>
    )
}