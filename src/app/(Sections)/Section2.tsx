import ImageCarouselContainer from "@/components/ImageCarousel/ImageCarousel";
import { Content } from "@/components/LayersDescription/Description";
import LayersDescription from "@/components/LayersDescription/LayersDescription";

export default function Section2() {
    const imageSection = [
        "/assets/example1.svg", "/assets/example2.svg", "/assets/example3.svg"
    ]

    const contents: Content[] = [
        {
            image: "/assets/ic_layers_48px.svg",
            title: "Pilihan Template",
            description: "Anda dapat memilih beragam design website yang sudah kami sediakan dan dapat Anda gunakan"
        },
        {
            image: "/assets/chart-bar-33.svg",
            title: "Responsive Design",
            description: "Website yang Anda akan dapat sudah memiliki fitur responsive design untuk dapat diakses dimanapun"
        },
        {
            image: "/assets/a-sync.svg",
            title: "Konsultasi Gratis",
            description: "Jangan takut kebingungan, Anda dapat berkonsultasi dengan tim Kami untuk mewujudukan website impian Anda"
        }
    ]

    return (
        <div className="w-full bg-white p-8 py-16 flex flex-col gap-y-8">
            <div className="flex flex-row gap-x-8 items-center justify-center">
                {
                    imageSection.map((item, index) => {
                        return(
                            <ImageCarouselContainer src={item} key={index} />
                        )
                    })
                }
            </div>
            <div className="mt-10 flex flex-col gap-y-16">
                <div className="flex flex-col gap-y-6 w-full items-center">
                    <h1 className="font-bold text-[36px] text-center">Kami siap membantu Anda</h1>
                    <p className="text-center max-w-[438px]">
                        Wujudkan website yang profesional sesuai dengan kebutuhan
                        dari produk yang ingin Anda pasarkan
                    </p>
                </div>
                
                <LayersDescription contents={contents} />
            </div>
        </div>
    )
}