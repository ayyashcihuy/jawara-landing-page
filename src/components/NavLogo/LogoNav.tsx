"use client";

import logo from "@/assets/logo/sks.svg";
import { motion } from "framer-motion";
import NextImage from "next/image";

export default function NavLogoComponent() {
    return (
        <motion.div
            className="absolute xl:py-10 bg-[#D6C233] xl:px-10 xl:pb-15 p-5 rounded-b-full top-0"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
                <NextImage width={100} height={100} className="xl:w-auto w-[60px]" src={logo} alt="logo_image"/>
        </motion.div>
    )
}