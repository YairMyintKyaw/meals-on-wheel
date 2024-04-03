import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Meals from "../../api/meal";
import MealCard from "../../components/Card/MealCard";

const HomeMember = () => {
  const [meals, setMeals] = useState([]);
  const {token} = useSelector((state: RootState) => state.user);



  useEffect(()=>{
    (async ()=>{
      if(token){
        const response = await Meals.getAllMeals(token);
        setMeals(response.data.data); 
      }
    })();
  },[])
  return (
    <div className="mt-5">
      <h1 className="text-3xl text-green-800 font-bold ">Meals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {meals?.map((meal:any)=>
          <MealCard key={meal.id} id={meal.id} img={meal.image} name={meal.name}/>
        )}
      </div>
    </div>
  )
}

export default HomeMember