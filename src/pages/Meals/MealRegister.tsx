import { useEffect, useState } from "react";
import RegisterForm from "../../components/form/Form";
import PageLayout from "../../components/Layout/PageLayout"
import { setUpForm } from "../../utils/utils";
import Meals from "../../api/meal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const MealRegister = () => {
  const {initialValues,validationSchema,fields } = setUpForm("meal");
  const [backendErrors, setBackendErrors] = useState();
  const {token, type} = useSelector((state: RootState) => state.user);
  const nav = useNavigate();
  console.log(token);
  
  const handleSubmit = async(values:any) => {
    if(token){
      const data = {
        ...values, 
        "is_preparing" : false,
        "is_finished" : false,
        "is_pickup" : false,
        "is_delivered" : false,
      }
      console.log(data);
      // console.log(token);
      const response = await Meals.createMeal(data,token).catch(error=>setBackendErrors(error));
      console.log("response:", response);
    }
  }
  useEffect(()=>{
    if(type !== "admin" && type !== "partner" ) nav("/")
  },[])
  return (
    <PageLayout>
      <h1 className="text-2xl text-green-800 font-bold mt-10 mb-5 uppercase text-center">Create new meal </h1>
      <RegisterForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={fields}
        onSubmit={handleSubmit}
        backendError={backendErrors}
        submitButtonText="Submit"
        className="max-w-[500px] mx-auto mb-10"
      />
    </PageLayout>
  )
}

export default MealRegister