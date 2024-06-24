import NextImage from "next/image";

interface Props {
    src: string;
}

export default function ImageCarouselContainer({ src }: Props) {
    return (
        <div className="bg-main-blue w-[340px] h-[430px] rounded-xl flex items-end justify-center mx-10">
            <NextImage src={src} width={283} height={394} alt={src} />
        </div>
    )
}