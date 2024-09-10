import NextImage from "next/image";

export type Content = {
    image: string,
    description: string
}

interface Props {
    content: Content;
}

export default function Description({ content }: Props) {
    return (
        <div className="flex flex-row items-start gap-x-6">
            <div className="w-[60px] h-[60px] bg-[#904F36] flex items-center justify-center">
                <NextImage src={content.image} width={100} height={100} alt={content.description} className="w-[25px]"/>
            </div>
            <div>
                <h1 className="text-[18px] font-base">{content.description}</h1>
            </div>
        </div>
    )
}