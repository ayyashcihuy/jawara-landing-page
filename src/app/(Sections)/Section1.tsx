import NextImage from "next/image";

export default function Section1() {
    return (
        <div className="w-full h-screen max-h-[720px] bg-main-blue flex flex-col items-center justify-center gap-y-6 relative">
            <div>
                <NextImage width={100} height={100} className="absolute top-0 -left-[100px] w-auto rotate-165" src="/assets/line-vector-1.svg" alt="line-vector-1"/>
                <NextImage width={100} height={100} className="absolute w-auto bottom-0 right-0" src="/assets/line-vector-1.svg" alt="line-vector-1"/>
            </div>
            <div className="w-content border border-main-gray p-2 px-4">
                <p className="text-[24px] text-center text-white">
                    HAI KAMI <span className="font-extrabold text-main-orange">JAWARATECH</span>
                </p>
            </div>
            <div>
                <h1 className="text-[64px] text-center font-extrabold text-white">
                    BUAT WEBSITE YANG MENARIK, <br />
                    UNTUK PRODUK ANDA <br />
                    BERSAMA DENGAN KAMI <br />
                </h1>
            </div>
            <div className="text-white text-[20px] font-medium max-w-[830px] text-center">
                <p>Membuat pengalaman digital yang menarik untuk mengangkat merek Anda ke tingkat baru dan menggapai target produk Anda</p>
            </div>
            <button className="text-white bg-main-orange p-2 px-5 rounded-md animation duration-200 hover:opacity-80">
                <p className="text-[16px] font-base tracking-wide">Buat Sekarang</p>
            </button>
        </div>
    )
}