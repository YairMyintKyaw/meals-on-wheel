import { useParams } from "react-router-dom"
import PageLayout from "../../components/Layout/PageLayout";
import { useEffect, useState } from "react";
import Meals, { MealsInterface } from "../../api/meal";
import Img from "../../assets/images/dummy_meal.jpg"
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import RegisterForm from "../../components/Form/Form";
import { setUpForm } from "../../utils/utils";

const MealDetail = () => {
  const { id } = useParams();
  const [mealData, setMealData] = useState<MealsInterface>({
    "id" : 1,
    "name" : "string",
    "ingredients" : "string",
    "allergy_information" : "string",
    "nutritional_information" : "string",
    "dietary_restrictions" : "string",
    "price" : 1,
    "is_frozen" : true,
    "delivery_status" : true,
    "image" : "string",
    "temperature" : "string"
  });
  const [isEditable, setIsEditable] = useState<boolean>(true);
  const [backendErrors, setBackendErrors] = useState<any>({});
  const {type, token} = useSelector((state: RootState) => state.user);
  const {validationSchema,fields } = setUpForm("meal");

  const handleSubmit = (values:any)=>{
    console.log(values);
    mealData && token && Meals.updateMeal(mealData?.id, values, token).catch((error)=>setBackendErrors(error))
  }
  const handleDelete = ()=>{
    if(mealData && token){
      Meals.deleteMeal(mealData.id, token );
    }
  }
  const handleBack = ()=>{
    setIsEditable(false);
  }
  const handleEdit = ()=>{
    setIsEditable(true);
  }

  useEffect(() => {
    (async () => {
      if(typeof id==="number" && typeof token==="string"){
        const response = await Meals.getMealDetail(id, token);
        setMealData(response.data); 
      }
    })();
  },)
  return (
    <PageLayout>
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        <figure className="flex-1 rounded overflow-hidden aspect-square"><img src={Img} className="object-cover w-full h-full" alt="Meal" /></figure>
        <div className="flex-1 lg:flex-[2]">
          {
            !isEditable?
            <>
              <h2 className="text-3xl text-green-800 font-semibold">Grilled Salmon</h2>
              <div className="mt-3">
                <section className="flex py-5 items-center border-b">
                  <h3 className="w-[150px] font-bold">Ingredients</h3>
                  <p className="text-neutral-800">Salmon fillet, olive oil, lemon, salt, pepper</p>
                </section>
                <section className="flex py-5 items-center border-b">
                  <h3 className="w-[150px] font-bold">Nutrition</h3>
                  <p className="text-neutral-800">Calories: 250, Protein: 30g, Fat: 15g, Carbohydrates: 0g</p>
                </section>
                <section className="flex py-5 items-center border-b">
                  <h3 className="w-[150px] font-bold">Dietary Restrictions</h3>
                  <p className="text-neutral-800">Salmon fillet, olive oil, lemon, salt, pepper</p>
                </section>
                <section className="flex py-5 items-center border-b">
                  <h3 className="w-[150px] font-bold">Allergy Information</h3>
                  <p className="text-neutral-800">Contains fish. May contain traces of nuts.</p>
                </section>
                <section className="flex py-5 items-center border-b">
                  <h3 className="w-[150px] font-bold">Frozen</h3>
                  <p className="text-neutral-800">NO</p>
                </section>
                <section className="flex py-5 items-center border-b">
                  <h3 className="w-[150px] font-bold">Temperature</h3>
                  <p className="text-neutral-800">Room Temperature</p>
                </section>
              </div>
              {
                type==="partner" || "admin"?
                <div>
                  <Button handleClick={handleEdit} buttonType="primary" className="max-w-[200px] mt-5">Edit</Button>
                  <Button handleClick={handleDelete} buttonType="primary" className="max-w-[200px] mt-5 bg-red-800">Delete</Button>
                </div>:
                <div>
                  <Button buttonType="primary" className="max-w-[200px] mt-5">Get this</Button>
                </div>
              }
            </>
            :<>
              <Button buttonType="back" className="mb-5" handleClick={handleBack}>Back</Button>
              <RegisterForm 
                initialValues={mealData}
                validationSchema={validationSchema}
                fields={fields}
                onSubmit={handleSubmit}
                backendError={backendErrors}
                submitButtonText="Update"
              />
            </>
          }
        </div>
      </div>
    </PageLayout>
  )
}

export default MealDetail