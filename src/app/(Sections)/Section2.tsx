import { Della_Respira } from "next/font/google";
import { Content } from "@/components/LayersDescription/Description";
import LayersDescription from "@/components/LayersDescription/LayersDescription";

const della_respira = Della_Respira({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
});  

export default function Section2() {
    const contents: Content[] = [
        {
            image: "/assets/icon/paper.svg",
            description: "Sudah bersifat sertifikat hak milik"
        },
        {
            image: "/assets/icon/furniture.svg",
            description: "Seluruh unit kamar fully furnished"
        },
        {
            image: "/assets/icon/kulkas.svg",
            description: "Memiliki beragam fasilitas penunjang untuk penghuni"
        }
    ]

    return (
        <div className="w-full bg-white p-8 py-16 flex flex-col gap-y-8">
            <div className="mt-10 flex flex-col gap-y-16">
                <div className="flex flex-col gap-y-3 w-full items-center">
                    <div className="font-bold text-[36px] text-center">
                        <h1 className={della_respira.className}>Kenapa Harus Milih SKS?</h1>
                    </div>
                    <p className="text-center">
                        SKS Living memiliki 6 keunggulan yang dapat menunjang kehidupan kamu
                    </p>
                </div>
                
                <LayersDescription contents={contents} />
            </div>
        </div>
    )
}