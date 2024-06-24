import Description, { Content } from "./Description";

interface Props {
    contents: Content[];
}

export default function LayersDescription({ contents }: Props) {
    return (
        <div className="flex flex-row gap-x-20 items-center justify-center mt-6">
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