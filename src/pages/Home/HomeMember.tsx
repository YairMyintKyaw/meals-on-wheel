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
        const response = await Meals.getAllMeals(token).catch(e=>console.log(e));        
        if(response?.data["meals by township"]) 
          setMeals(response.data["meals by township"]); 
      }
    })();
  },[])
  return (
    <div className="mt-5">
      <h1 className="text-3xl text-green-800 font-bold ">Meals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-3">
        {meals.length>0? meals.map(({meal}:{meal:any})=>
          <MealCard key={meal.id} id={meal.id} img={meal.image} name={meal.name}/>
        ):<p className="text-green-800 mt-5 mb-72">There is no meal available</p>}
      </div>
    </div>
  )
}

export default HomeMember