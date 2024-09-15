import { Content } from "@/components/LayersDescription/Description";
import LayersDescription from "@/components/LayersDescription/LayersDescription";
import Section2Title from "@/components/Title/Section2Title";

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
        },
        {
            image: "/assets/icon/shield.svg",
            description: "Keamanan kost 24 jam dan smart door lock"
        },
        {
            image: "/assets/icon/bus.svg",
            description: "Menyediakan shuttle bus untuk penghuni"
        },
        {
            image: "/assets/icon/gear.svg",
            description: "Management kost yang terjamin"
        }
    ]

    return (
        <div className="w-full bg-[#ECEDEB] p-8 py-16 flex flex-col gap-y-8">
            <div className="mt-10 flex flex-col gap-y-16">

                <Section2Title />
                
                <div className="flex items-center justify-center w-full">
                    <LayersDescription contents={contents} />
                </div>
            </div>
        </div>
    )
}