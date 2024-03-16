import { cn } from "../../utils/utils"
import "./style.css"

type Props = {
    type?: "textBlock",
    children: React.ReactNode,
    className?: string
}

const Text: React.FC<Props> = ({ type, children, className }) => {
    return (
        <p className={cn("text-xl font-medium mt-[56px] py-[8px] mx-auto relative", className, { "textBlock": type })}>
            {children}
        </p>
    )
}

export default Text