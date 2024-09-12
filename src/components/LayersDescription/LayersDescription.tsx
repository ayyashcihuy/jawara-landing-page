import Description, { Content } from "./Description";

interface Props {
    contents: Content[];
}

export default function LayersDescription({ contents }: Props) {
    return (
        <div className="flex flex-wrap gap-x-20 items-center justify-center mt-6 w-full gap-y-10 max-w-[1200px]">
            {
                contents.map((item, index) => {
                    return (
                        <Description content={item} key={index} />
                    )
                })
            }
        </div>
    )
}