import { Spirax, Raleway } from "next/font/google";
import NextImage from "next/image";
import hero_image from "@/assets/hero_image.svg";
import logo from "@/assets/logo/sks.svg";

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

export default function Section1() {
    return (
        <div className="w-full h-auto bg-[#77412DB2]/70 flex flex-col items-center justify-center gap-y-4 relative">

            <NextImage width={100} height={100} className="w-full -z-10 object-cover min-h-[720px]" src={hero_image} alt="hero_image"/>
            
            <div className="absolute xl:py-10 bg-[#D6C233] xl:px-10 xl:pb-15 p-5 rounded-b-full top-0">
                <NextImage width={100} height={100} className="xl:w-auto w-[60px]" src={logo} alt="logo_image"/>
            </div>

            <div className="absolute flex flex-col items-center justify-center xl:mt-20 gap-y-4">
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
            </div>
            
        </div>
    )
}