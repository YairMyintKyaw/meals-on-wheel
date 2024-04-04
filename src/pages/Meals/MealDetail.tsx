import { useNavigate, useParams } from "react-router-dom"
import PageLayout from "../../components/Layout/PageLayout";
import { useEffect, useState } from "react";
import Meals, { MealsInterface } from "../../api/meal";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import RegisterForm from "../../components/Form/Form";
import { setUpForm } from "../../utils/utils";
import Order from "../../api/order";

const MealDetail = () => {
  const { id } = useParams();
  const [mealData, setMealData] = useState<MealsInterface>({
    "id": 1,
    "name": "",
    "ingredients": "",
    "allergy_information": "",
    "nutritional_information": "",
    "dietary_restrictions": "",
    "price": 1,
    "is_frozen": "true",
    "delivery_status": "true",
    "image": "",
    "temperature": "",
    "is_preparing": "false",
    "is_finished": "false",
    "is_pickup": "false",
    "is_delivered": "false",
  });
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [backendErrors, setBackendErrors] = useState<any>({});
  const { type, token } = useSelector((state: RootState) => state.user);
  const { validationSchema, fields } = setUpForm("meal");
  const nav = useNavigate();

  const handleSubmit = async (values: any) => {
    const data: any = {
      "name": values.name,
      "ingredients": values.ingredients,
      "allergy_information": values.allergy_information,
      "nutritional_information": values.nutritional_information,
      "dietary_restrictions": values.dietary_restrictions,
      "price": values.price,
      "is_frozen": values.is_frozen,
      "delivery_status": values.delivery_status,
      "temperature": values.temperature,
      "is_preparing": values.is_preparing,
      "is_finished": values.is_finished,
      "is_pickup": values.is_pickup,
      "is_delivered": values.is_delivered,
      "image": values.image
    }
    // if(values.image){
    //   data.image= values.image
    // }
    console.log(data.image);

    if (mealData && token) {
      if (mealData.image != values.image) {
        const uploadedImg = await Meals.uploadMealImg(data.image, token);
        const image = uploadedImg.data?.imagePath.split("/")[2];
        data.image = image;
      }
      const response = await Meals.updateMeal(mealData?.id, data, token).catch((error) => setBackendErrors(error))
      if (!response?.data.error) nav("/meals");

    }
  }

  const handlePurchase = async () => {
    console.log(mealData);
    if (mealData && token) {
      const response = await Order.register(mealData, token);
      console.log(response);
    }
  }

  const handleDelete = async () => {
    if (mealData && token) {
      const response = await Meals.deleteMeal(mealData.id, token);
      console.log(response);
      nav("/meals");
    }
  }
  const handleBack = () => {
    setIsEditable(false);
  }
  const handleEdit = () => {
    setIsEditable(true);
  }

  const handleBackToMeal = () => {
    nav(-1);
  }

  const handleShowConfirm = ()=>{
    setIsConfirm(true);
  }

  const handleHideConfirm = ()=>{
    setIsConfirm(false);
  }

  useEffect(() => {
    (async () => {
      if (id && token) {
        const response = await Meals.getMealDetail(parseInt(id), token);
        setMealData(response.data.meal);
        console.log(response.data.meal);
      }
    })();
  }, [])
  return (
    <PageLayout>
      <Button buttonType="back" className="mb-5 mt-5" handleClick={handleBackToMeal}>Back</Button>
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        <figure className="flex-1 rounded overflow-hidden aspect-square"><img src={"http://127.0.0.1:8000/uploads/meals/" + mealData.image} className="object-cover w-full h-full" alt="Meal" /></figure>
        <div className="flex-1 lg:flex-[2]">
          {
            !isEditable ?
              <>
                <h2 className="text-3xl text-green-800 font-semibold">{mealData.name}</h2>
                <div className="mt-3">
                  <section className="flex py-5 items-center border-b">
                    <h3 className="w-[150px] font-bold">Ingredients</h3>
                    <p className="text-neutral-800">{mealData.ingredients}</p>
                  </section>
                  <section className="flex py-5 items-center border-b">
                    <h3 className="w-[150px] font-bold">Nutrition</h3>
                    <p className="text-neutral-800">{mealData.nutritional_information}</p>
                  </section>
                  <section className="flex py-5 items-center border-b">
                    <h3 className="w-[150px] font-bold">Dietary Restrictions</h3>
                    <p className="text-neutral-800">{mealData.dietary_restrictions}</p>
                  </section>
                  <section className="flex py-5 items-center border-b">
                    <h3 className="w-[150px] font-bold">Allergy Information</h3>
                    <p className="text-neutral-800">{mealData.allergy_information}</p>
                  </section>
                  <section className="flex py-5 items-center border-b">
                    <h3 className="w-[150px] font-bold">Frozen</h3>
                    <p className="text-neutral-800">{mealData?.is_frozen === "true" ? "YES" : "No"}</p>
                  </section>
                  <section className="flex py-5 items-center border-b">
                    <h3 className="w-[150px] font-bold">Temperature</h3>
                    <p className="text-neutral-800">{mealData.temperature}</p>
                  </section>
                </div>
                {
                  type === "partner" || type === "admin" ?
                    <div>
                      <Button handleClick={handleEdit} buttonType="primary" className="max-w-[200px] mt-5">Edit</Button>
                      <Button handleClick={handleDelete} buttonType="primary" className="max-w-[200px] mt-5 bg-red-800">Delete</Button>
                    </div> :
                    <div>
                      {isConfirm ? <>
                        <p className="text-green-800 font-bold pt-5 capitalize">Are you sure if this meal is suitable for you?</p>
                        <Button handleClick={handlePurchase} buttonType="primary" className="max-w-[200px] mt-5">Confirm</Button>
                        <Button handleClick={handleHideConfirm} buttonType="primary" className="bg-red-800 max-w-[200px] mt-5">Go Back</Button>
                      </> :
                        <Button handleClick={handleShowConfirm} buttonType="primary" className="max-w-[200px] mt-16">Place Order</Button>
                      }
                    </div>
                  }
              </>
              : <>
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