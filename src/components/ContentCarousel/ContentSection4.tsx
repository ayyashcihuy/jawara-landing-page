"use client";
import { Content } from "@/app/(Sections)/Section4";
import { Della_Respira, Raleway } from "next/font/google";
import NextImage from "next/image";

const della_respira = Della_Respira({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
});  

const railway = Raleway({
    subsets: ["latin"],
    weight: "400",
    style: "normal"
});


export default function ContentSection4({ content }: { content: Content }) {
    return (
        <div className="bg-white w-full max-w-[1200px]">
                <div className={`flex ${content.id % 2 === 0 ? "flex-row-reverse" : "flex-row "} w-full h-full items-center justify-between`}>
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <NextImage width={100} height={100} className="w-auto" src="/assets/images/img-4.svg" alt="asset_images" />
                    </div>
                    <div className="w-full h-full flex flex-col gap-y-4 items-stretch justify-between px-10 py-4">
                        <div className="flex flex-col gap-y-10">
                            <div className="xl:text-[36px] text-xl">
                                <h1 className={della_respira.className}>
                                    {content.title}
                                </h1>
                            </div>
                            <div className="flex flex-col gap-y-6">
                                <p className={railway.className}>{content.description}</p>
                            </div>
                            <div className="flex flex-wrap text-[#593121] gap-x-4 gap-y-4">
                                {
                                    content && content.feature.length > 0 ?
                                    content.feature.map((item, index) => {
                                        return (
                                            <div key={index} className="px-3 py-2 bg-[#ECEDEB]">
                                                <p className={railway.className}>{item}</p>
                                            </div>
                                        )
                                    })
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}