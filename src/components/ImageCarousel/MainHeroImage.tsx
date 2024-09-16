"use client";
import { motion } from "framer-motion";
import NextImage from "next/image";
import image_hero from "@/assets/hero_image.svg";

export default function MainImage({ image }: { image: { src: string, placeholder: string }}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="-z-10 object-cover min-h-[720px] w-full"
        >
            <NextImage width={100} height={100} key={image.src} placeholder="blur" blurDataURL={image.placeholder} className="w-full" src={image_hero} alt="hero_image"/>
        </motion.div>
    )
}