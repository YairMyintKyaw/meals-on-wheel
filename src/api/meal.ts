import axios from "axios";
import { BASE_URL } from "./constant";

export interface MealsInterface {
  "id": number,
  "name" : string,
  "ingredients" : string,
  "allergy_information" : string,
  "nutritional_information" : string,
  "dietary_restrictions" : string,
  "price" : number,
  "is_frozen" : string,
  "delivery_status" : string,
  "image" : string,
  "temperature" : string,
  "is_preparing" : string,
  "is_finished" : string,
  "is_pickup" : string,
  "is_delivered" : string,
}
  

const Meals = (function () {
  const getAllMeals = async (token:string) => {
    return await axios.get(BASE_URL + "meals",
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
        }
      }
    )
  }
  const getPartnerMeals = async(token:string)=>{
    return await axios.get(BASE_URL + "showPartnerMeals",
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
        }
      }
    )
  }
  const createMeal = async (mealData:MealsInterface, token:string) => {
    return await axios.post(BASE_URL + "meal",
      mealData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':`Bearer ${token}`
        }
      }
    )
  }
  const getMealDetail = async (id: number, token:string) => {
    return await axios.get(BASE_URL+"meal/"+id,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      }
    });
  }
  const updateMeal = async (id: number, updateData:any, token:string) => {
    console.log(updateData);
    
    return await axios.put(BASE_URL+"meal/"+id,
      updateData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
        }
      }
    )
  }
  const deleteMeal = async (id: number, token:string) => {
    return await axios.delete(BASE_URL+"meal/"+id,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
        }
      }
    );
  }
  return { getAllMeals,getPartnerMeals, createMeal, getMealDetail, updateMeal, deleteMeal }
})();

export default Meals;