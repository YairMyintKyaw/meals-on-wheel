import MealCard from "../../components/Card/MealCard"
import PageLayout from "../../components/Layout/PageLayout"
import Img from "../../assets/images/dummy_meal.jpg"
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MealsModule, { MealsInterface } from "../../api/meal";

const Meals = () => {
  const nav = useNavigate();
  const {type, token} = useSelector((state: RootState) => state.user);
  const [meals, setMeals] = useState<MealsInterface[]>();
  const handleClick = () => {
    nav("/meals/create")
  }
  useEffect(() => {
    // check the user type
    if (type !== "partner") nav("/");
    (async ()=>{
      if(token) {
        const resposne = await MealsModule.getPartnerMeals(token).catch(e=>console.log(e) )
        setMeals(resposne?.data);
      }
    })()
  }, [])
  return (
    <PageLayout>
      <section className="min-h-96 py-10">
        <div className="flex justify-between">
          <h2 className="text-2xl text-green-800 font-bold">Meals</h2>
          <button onClick={handleClick} className="bg-green-800 rounded-full text-white text-2xl p-1"><BiPlus /></button>
        </div>
        <div className="mt-5 flex gap-3 flex-wrap">
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          <MealCard name={"Lorem lorem lorem"} img={Img} id={1} />
          {meals?meals.map(meal=><MealCard key={meal.id} id={meal.id} name={meal.name} img={meal.name}/>):"You do not have any meal yet. Do you want to create one?"}
        </div>
      </section>
    </PageLayout>
  )
}

export default Meals