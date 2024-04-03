import { cn } from "../../utils/utils"
import "./style.css"

interface propsType {
    handleClick?: () => void,
    buttonType?: "primary" | "secondary" | "back" | "secondary--green" | "white" | "gray" | undefined,
    className?: string,
    type?: "submit" | "button",
    children: React.ReactNode
}

const Button = (
    { handleClick, buttonType = undefined, className = "", type = "button", children }: propsType) => {
    return (
        <button
            type={type}
            className={cn("text-lg py-[12px] w-full border-[1px] border-gray-300 rounded-[6px] text-neutral-800 transition-all duration-500",
                { "bg-green-800 text-white": buttonType === "primary" },
                { "rounded-[44px] px-[29.5px] py-[12px] h-fit text-[18px] hover:scale-95 hover:shadow": buttonType === "secondary" },
                { "rounded-[44px] px-[29.5px] py-[12px] h-fit text-[18px] whitespace-nowrap text-white bg-green-800 hover:scale-95 hover:shadow": buttonType === "secondary--green" },
                { "back-button flex items-center gap-[16px] w-fit py-1 border-none text-black font-medium hover:shadow-none hover:-translate-y-0": buttonType === "back" },
                { "bg-green-800 text-white text-white bg-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center": buttonType === "white" },
                { "mt-4 mb-8 w-full rounded-md bg-green-800 px-6 py-3 font-medium text-white hover:bg-green-900 duration-500": buttonType === "gray" },
                { "hover:shadow-lg hover:-translate-y-1": buttonType === undefined },
                className,

            )}
            onClick={handleClick}
        >
            {children}
        </button >
    )
}

export default Button