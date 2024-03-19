import { object } from "yup"
import { cn } from "../../utils/utils"

type Props = {
    Img: string,
    width: number,
    height: number,
    className?: string,
    object?: "center" | "left" | "right"
    isContain?: boolean
}

const Image: React.FC<Props> = ({ Img, width, height, className, object, isContain = false }) => {
    return (
        <figure className={cn(`aspect-[${width}/${height}] w-full h-auto overflow-hidden`, className)}>
            <img className={cn("w-full h-full object-cover",
                { "object-center": object === "center" },
                { "object-left": object === "left" },
                { "object-right": object === "right" },
                { "object-contain": isContain })} src={Img} alt="" />
        </figure>
    )
}

export default Image