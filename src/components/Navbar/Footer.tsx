import { Raleway, Spirax } from "next/font/google";
import NextImage from "next/image";

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

export default function Footer() {
    return (
        <div className="w-screen py-4 flex flex-col items-center justify-center gap-y-4 min-h-[300px] bg-[#593121]">
            <div className="flex flex-row items-center justify-center text-white text-4xl gap-x-4">
                <NextImage width={100} height={100} src="/assets/icon/logo.svg" alt="icon_only" className="w-auto" />
                <p className={spirax.className}>
                    Serumah Kost Sendiri
                </p>
            </div>
            <div className="text-center text-white text-sm">
                <p className={railway.className}>Jl. Serelek Jl. Carang Pulang No. 11 Cikarawang, Kec. <br />
                Dramaga, Kab. Bogor</p>
            </div>
        </div>
    )
}