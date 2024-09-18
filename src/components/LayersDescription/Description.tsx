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
        <div className="w-full max-w-[300px] gap-x-6 flex items-center">
            <div>
                <div className="w-[60px] h-[60px] bg-[#903936] flex items-center justify-center">
                    <NextImage src={content.image} width={100} height={100} alt={content.description} className="w-[30px] bg-[#904F36]"/>
                </div>
            </div>
            <div>
                <h1 className="text-md font-base">{content.description}</h1>
            </div>
        </div>
    )
}