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
        <div className="w-full bg-[#77412DB2]/70 flex flex-col items-center justify-center gap-y-4 relative">

            <NextImage width={100} height={100} className="w-full -z-10" src={hero_image} alt="line-vector-1"/>
            
            <div className="absolute py-10 bg-[#D6C233] px-10 pb-15 rounded-b-full top-0">
                <NextImage width={100} height={100} className="w-auto" src={logo} alt="line-vector-1"/>
            </div>

            <div className="absolute flex flex-col items-center justify-center mt-20">

                <div className="text-[86px] text-center font-extrabold text-white tracking-wide">
                    <h1 className={spirax.className}>
                        Serumah Kost Sendiri
                    </h1>
                </div>
                <div className="text-white text-[20px] font-medium max-w-[830px] text-center">
                    <p className={railway.className}>Hunian kost eksklusif dengan fasilitas yang lengkap untuk menunjang kehidupanmu
                    serta memiliki beragam tipe kamar sesuai kebutuhan kamu</p>
                </div>
                <button className="text-[#443D0E] bg-[#D6C233] p-2 px-7 rounded-full animation duration-200 hover:opacity-80 mt-20">
                    <p className="text-[16px] font-[600] tracking-wide">Buat Sekarang</p>
                </button>
            </div>
            
        </div>
    )
}