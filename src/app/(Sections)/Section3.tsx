import ContentCarousel, { ProductContent } from "@/components/ContentCarousel/ContentCarousel";

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
        <div className="mt-6 flex flex-col gap-y-10 p-10 py-16 items-center">
            {
                contentCarousel && contentCarousel.length > 0 ? 
                    contentCarousel.map((item, index) => {
                        return (
                            <ContentCarousel key={index} content={item} />
                        )
                    })
                : null
            }
        </div>
    )
}