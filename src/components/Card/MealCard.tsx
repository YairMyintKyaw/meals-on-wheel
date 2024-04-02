import { useNavigate, useSearchParams } from "react-router-dom";
import "./style.css";
interface props{
  name:string,
  img:string,
  id:string
}

const MealCard:React.FC<props> = ({img, name, id}) => {
  const nav = useNavigate();
  const handleClick = () => nav(`/meals/${id}`)
  return (
    <button onClick={handleClick} className={`flex-1 shadow mealCard max-w-[300px] aspect-square relative flex  overflow-hidden cursor-pointer group`}>
      <figure className="w-full h-full flex group-hover:scale-110 duration-1000">
        <img className="object-cover w-full h-full" src={"http://127.0.0.1:8000/uploads/meals/"+img} alt="" />
      </figure>
      <p className="absolute z-20 top-0 left-0 bottom-0 right-0 m-auto flex justify-center items-center text-white text-xl uppercase font-semibold opacity-0 translate-y-3 transition ease-in-out duration-[.8s] group-hover:opacity-100 group-hover:translate-y-0">{name}</p>
    </button>
  )
}

export default MealCard