"use client";
import { motion } from "framer-motion";
import { Spirax, Raleway } from "next/font/google";

const spirax = Spirax({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
});  

const railway = Raleway({
    subsets: ["latin"],
    weight: "400",
    style: "normal"
});

export default function Component() {
    return (
        <motion.div
            className="absolute flex flex-col items-center justify-center xl:mt-20 gap-y-4 title"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
                <div className="xl:text-[80px] lg:text-[80px] text-4xl text-center font-extrabold text-white tracking-wide">
                    <h1 className={spirax.className}>
                        Serumah Kost Sendiri
                    </h1>
                </div>
                <div className="text-white xl:text-[18px] lg:text-[18px] xl:mt-5 text-sm font-medium max-w-[830px] text-center">
                    <p className={railway.className}>Hunian kost eksklusif dengan fasilitas yang lengkap untuk menunjang kehidupanmu
                    serta memiliki beragam tipe kamar sesuai kebutuhan kamu</p>
                </div>
                <button className="text-[#443D0E] bg-[#D6C233] p-2 px-7 rounded-full animation duration-200 hover:opacity-80 xl:mt-15 mt-10">
                    <p className="text-[16px] font-[600] tracking-wide">Buat Sekarang</p>
                </button>
        </motion.div>
    )
}