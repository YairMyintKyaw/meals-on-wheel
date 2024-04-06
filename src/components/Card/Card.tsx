import { cn } from "../../utils/utils"
import Button from "../Button/Button"
type Props = {
  title: string,
  description: string,
  img: string,
  type?: "link",
  className?: string,
  onClick?: () => void
}

const Card: React.FC<Props> = ({ title, description, img, type, className, onClick }) => {
  return (
    <section className={cn("flex-1 flex flex-col items-center shadow-md border-[1px] rounded-[30px] p-[37px] text-green-800 transition-all ease duration-1000 group hover:bg-green-800 hover:text-white hover:shadow-9xl hover:-translate-y-1", className,
      "cursor-pointer", type)} onClick={onClick}>
      <figure className="card_img mb-[24.49px] hover:text-white">{<img src={img} className="" alt="" />}</figure>
      <h3 className="text-2xl font-semibold mb-[23px]">{title}</h3>
      <p className="text-center text-xs font-medium">{description}</p>
      {type === "link" && <Button buttonType="secondary" handleClick={onClick} className="mt-[43px] text-green-800  group-hover:text-white group-hover:-translate-y-1 ease-out duration-1000">Learn More</Button>}
    </section>
  )
}

export default Card