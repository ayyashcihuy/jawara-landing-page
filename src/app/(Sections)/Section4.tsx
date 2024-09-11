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

export default function Section4() {
    return (
        <div className="mt-6 flex flex-col gap-y-10 p-10 py-16 items-center w-full min-h-screen bg-white">
            <div className="bg-white xl:w-3/4 w-5/6">
                <div className="flex flex-row w-full h-full items-center justify-between">
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <NextImage width={100} height={100} className="w-auto" src="/assets/images/img-4.svg" alt="asset_images" />
                    </div>
                    <div className="w-full h-full flex flex-col gap-y-4 items-stretch justify-between px-10 py-4">
                        <div className="flex flex-col gap-y-10">
                            <div className="xl:text-[36px] text-xl">
                                <h1 className={della_respira.className}>
                                    Fasilitas Area Kawasan
                                </h1>
                            </div>
                            <div className="flex flex-col gap-y-6">
                                <p className={railway.className}>SKS Living memiliki area kawasan dengan fasilitas yang dapat memenuhi kehidupan penghuni</p>
                            </div>
                            <div className="flex flex-wrap text-[#593121] gap-x-4 gap-y-4">
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Lahan Parkir</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>One Gate System</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Laundry Pakaian</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>CCTV 24 Jam</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Security 24 Jam</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Taman Terbuka</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Restoran</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Cafe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white xl:w-3/4 w-5/6">
                <div className="flex flex-row w-full h-full items-center justify-between">
                    <div className="w-full h-full flex flex-col gap-y-4 items-stretch justify-between px-10 py-4">
                        <div className="flex flex-col gap-y-10">
                            <div className="xl:text-[36px] text-xl">
                                <h1 className={della_respira.className}>
                                    Fasilitas Kamar
                                </h1>
                            </div>
                            <div className="flex flex-col gap-y-6">
                                <p className={railway.className}>SKS Living memiliki area kawasan dengan fasilitas yang dapat memenuhi kehidupan penghuni</p>
                            </div>
                            <div className="flex flex-wrap text-[#593121] gap-x-4 gap-y-4">
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>1 Set Tempat Tidur </p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>1 Set Sprei</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>1 Set Meja Belajar</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Kamar Mandi Dalam</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Water Heater</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Air Conditioner</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Lemari Baju</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Smart Door Lock</p>
                                </div>
                                <div className="px-3 py-2 bg-[#ECEDEB]">
                                    <p className={railway.className}>Gorden</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <NextImage width={100} height={100} className="w-auto" src="/assets/images/img-5.svg" alt="asset_images" />
                    </div>
                </div>
            </div>
        </div>
    )
}