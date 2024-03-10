import { cn } from "../../utils/utils"
import "./style.css"

interface propsType {
    handleClick?: () => void,
    buttonType?: "primary" | "secondary" | "back" | undefined,
    className?: string,
    type?: "submit" | "button",
    children: React.ReactNode
}

const Button = (
    { handleClick, buttonType = undefined, className = "", type = "button", children }: propsType) => {
    return (
        <button
            type={type}
            className={cn("text-lg py-[12px] w-full border-[1px] border-gray-300 rounded-[6px] text-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-500",
                className,
                { "bg-green-800 text-white": buttonType === "primary" },
                { "back-button flex items-center gap-[16px] w-fit py-1 border-none text-black font-medium hover:shadow-none hover:-translate-y-0": buttonType === "back" })}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button