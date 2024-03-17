import { useEffect, useState } from "react"
import { cn } from "../../utils/utils"
import Image from "../Image/Image";
import Close from "../../assets/images/Top/img_accordion01.png"
import Open from "../../assets/images/Top/img_accordion02.png"
export interface FAQ_type {
    question: string,
    answer: string
}

type ExtendedData = FAQ_type & { isOpen: boolean };

type Props = {
    data: FAQ_type[]
}

const Accordion: React.FC<Props> = ({ data }) => {
    const [qAndA, setQAndA] = useState<ExtendedData[]>();

    useEffect(() => {
        const modifyData = data.map((eachData) => ({ ...eachData, isOpen: false }))
        setQAndA(modifyData);
    }, [])
    const handleClick = (e) => {
        const currentIndex = e.target.getAttribute("data-id");
        let modifyData;
        if (qAndA?.[currentIndex].isOpen) modifyData = data.map((eachData) => ({ ...eachData, isOpen: false }));
        else modifyData = qAndA?.map((data, index) => (index === +currentIndex ? { ...data, isOpen: true } : { ...data, isOpen: false }))
        setQAndA(modifyData);
    }
    return (
        <section className="flex flex-col gap-3 ">
            {qAndA?.map(({ question, answer, isOpen }, index) =>
                <div key={index} className=" relative overflow-hidden w-full shadow-lg  bg-white rounded-lg">
                    <button data-id={index} onClick={handleClick} className={cn("w-full font-semibold text-start relative z-10 ps-4 pr[15px] py-5 text-neutral-800 hover:text-green-800", { "text-green-800": isOpen })}>{question}</button>
                    <p className={cn("hidden px-4 pb-5", { "flex": isOpen })}>{answer}</p>
                    <Image Img={Close} width={24} height={24} className={cn("absolute top-[20px] right-[10px]  max-w-[24px]", { "opacity-0": isOpen })} />
                    <Image Img={Open} width={24} height={24} className={cn("absolute top-[20px] right-[10px]  max-w-[24px]", { "opacity-0": !isOpen })} />
                </div>)}
        </section>
    )
}

export default Accordion