import { object } from "yup"
import { cn } from "../../utils/utils"

type Props = {
    Img: string,
    width: number,
    height: number,
    className?: string,
    object?: "center" | "left" | "right"
}

const Image: React.FC<Props> = ({ Img, width, height, className, object }) => {
    return (
        <figure className={cn(`aspect-[${width}/${height}] w-full h-auto overflow-hidden`, className)}>
            <img className={cn("w-full h-full object-contain", { "object-center": object === "center" }, { "object-left": object === "left" }, { "object-right": object === "right" })} src={Img} alt="" />
        </figure>
    )
}

export default Image