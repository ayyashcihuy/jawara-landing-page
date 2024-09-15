import { Della_Respira, Raleway } from "next/font/google";
import NextImage from "next/image";

export type ProductContent = {
    image: string;
    title: string;
    description: string[];
}

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

export default function ContentCarousel({ content }: {content: ProductContent} ) {
    return (
        <div className="bg-white w-full max-w-[1200px]">
            <div className="flex flex-row w-full h-full items-center justify-between">
                <div className="w-full h-full flex flex-col gap-y-4 items-stretch justify-between px-10 py-4">
                    <div className="flex flex-col gap-y-10">
                        <div className="xl:text-[36px] text-xl">
                            <h1 className={della_respira.className}>
                                {content.title}
                            </h1>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            {
                                content && content.description.length > 0 ? 
                                    content.description.map((item, index) => {
                                        return(
                                            <p key={index} className={railway.className}>{item}</p>
                                        )
                                    })
                                : null
                            }

                        </div>
                    </div>
                    <a target="_blank" href={`https://wa.me/+6282221019606?text=Hi%2C%20saya%20dengan%20admin%20SKS.%0AAda%20yang%20bisa%20dibantu%3F%0AProduk%20yang%20anda%20klik%20adalah%20${content.title}`} className="text-[#443D0E] bg-[#D6C233] p-2 px-7 animation duration-200 hover:opacity-80 xl:mt-15 mt-10 w-fit">
                        <p className="text-[16px] font-[600]">Booking Sekarang</p>
                    </a>
                </div>
                <div className="w-full h-full flex items-center justify-center p-4">
                    <NextImage width={100} height={100} className="w-auto" src={content.image} alt="asset_images" />
                </div>
            </div>
        </div>
    )
}