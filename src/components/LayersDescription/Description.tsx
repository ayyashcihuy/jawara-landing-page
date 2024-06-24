import NextImage from "next/image";

export type Content = {
    image: string,
    title: string,
    description: string
}

interface Props {
    content: Content;
}

export default function Description({ content }: Props) {
    return (
        <div className="w-[350px] flex flex-row items-start gap-x-6">
            <NextImage src={content.image} width={35} height={35} alt={content.title}/>
            <div>
                <h1 className="text-[20px] font-medium">{content.title}</h1>
                <p className="text-[16px] font-normal">{content.description}</p>
            </div>
        </div>
    )
}