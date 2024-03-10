import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { cn, setUpForm } from "../../utils/utils";
import RegisterForm from "../../components/form/Form";
import AuthLayout from "../../components/Layout/AuthLayout";
import { useState } from "react";

export const Register = () => {
  const { type } = useParams<{ type: string }>();
  const isUserInfoForm = useLocation().pathname.endsWith('/info');
  const nav = useNavigate();
  const userDataform = setUpForm(type);
  const accRegisterForm = setUpForm("");
  const [userData, setUserData] = useState({ ...userDataform.initialValues, ...accRegisterForm.initialValues })
  const handleSubmit = () => { }
  const handleNextStep = () => nav("info")
  return (
    <AuthLayout title="Fill the Member Information">
      <p className="text-lg font-medium mb-[24px] text-neutral-500">Let's catch you up on what's happening at MerryMeal.</p>
      <RegisterForm
        initialValues={accRegisterForm.initialValues}
        validationSchema={accRegisterForm.validationSchema}
        fields={accRegisterForm.fields}
        onSubmit={handleNextStep}
        submitButtonText="Next"
        className={cn({ "hidden": isUserInfoForm })}
      />

      <RegisterForm
        initialValues={userDataform.initialValues}
        validationSchema={userDataform.validationSchema}
        fields={userDataform.fields}
        onSubmit={handleSubmit}
        submitButtonText="Submit"
        className={cn({ "hidden": !isUserInfoForm })}
      />
      <p className="text-base text-neutral-800 font-medium text-center mt-[48px]">Have an account ? <Link to="/login">Sign In</Link> Here</p>
    </AuthLayout>
  )
}
