"use client";
import Description, { Content } from "./Description";
import { motion } from "framer-motion";

interface Props {
    contents: Content[];
}

export default function LayersDescription({ contents }: Props) {
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
                className="flex flex-wrap gap-x-20 items-center justify-center mt-6 w-full gap-y-10 max-w-[1200px]"
            >
                {
                    contents.map((item, index) => {
                        return (
                            <motion.div key={index} variants={{ hidden: {opacity: 0}, show: {opacity: 1}}}>
                                <Description content={item} key={index} />
                            </motion.div>
                        )
                    })
                }
            </motion.section>
    )
}