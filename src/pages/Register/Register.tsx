import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { cn, setUpForm } from "../../utils/utils";
import RegisterForm from "../../components/Form/Form";
import AuthLayout from "../../components/Layout/AuthLayout";
import { useEffect, useState } from "react";
import Auth from "../../api/auth";

interface backendError{
  email:string,
  username:string
}

export const Register = () => {
  const { type } = useParams<{ type: string }>();
  const isUserInfoForm = useLocation().pathname.endsWith('/info');
  const nav = useNavigate();
  const userDataform = setUpForm(type);
  const accRegisterForm = setUpForm("");
  const [userData, setUserData] = useState({ ...userDataform.initialValues, ...accRegisterForm.initialValues })
  const [backendErrors, setBackendErrors] = useState<any>({});
  const handleSubmit = async(values: any) => {
    Object.keys(values).forEach(function(key, index) {
      values[key] = typeof values[key] === "number"? values[key].toString(): values[key];
    });
    setUserData({ ...values, ...userData });
    console.log({ ...values, ...userData,type:type });
    const response = await Auth.register({...values, ...userData, type:type}).catch(e=>console.log(e));
    
    if(response?.data?.error) {
      const error  = response.data.error;
      console.log(error);
      setBackendErrors(error);
      if(error["user_name"] || error["email"] || error["password"] || error["confirm_password"]) nav(`/register/${type}`);
    }else{
      // dispatch()
      console.log(response);
      nav("/login");
    };
    
    

  }
  const handleNextStep = (values: any) => {
    //change the int to string 
    setUserData({ ...values })
    console.log(userData);

    nav("info")
  }
  useEffect(() => {
    if (isUserInfoForm) {
      // prevent the step 1 of the registration is not filled
      const isRegisterFilled = Object.keys(accRegisterForm.initialValues).reduce((isFilled: number, key: string) => {
        if (userData[key]) ++isFilled;
        return isFilled;
      }, 0)
      if (isRegisterFilled === 0) {
        nav(`/register/${type}`)
      }
    }
  }, [userData])
  return (
    <AuthLayout title="Fill the Member Information">
      <p className="text-lg font-medium mb-[24px] text-neutral-500">Let's catch you up on what's happening at MerryMeal.</p>
      <RegisterForm
        initialValues={accRegisterForm.initialValues}
        validationSchema={accRegisterForm.validationSchema}
        fields={accRegisterForm.fields}
        onSubmit={handleNextStep}
        submitButtonText="Next"
        backendError={backendErrors}
        className={cn({ "hidden": isUserInfoForm })}
      />

      <RegisterForm
        initialValues={userDataform.initialValues}
        validationSchema={userDataform.validationSchema}
        fields={userDataform.fields}
        onSubmit={handleSubmit}
        submitButtonText="Submit"
        backendError={backendErrors}
        className={cn({ "hidden": !isUserInfoForm })}
      />
      <p className="text-base text-neutral-800 font-medium text-center mt-[48px]">Have an account ? <Link to="/login">Sign In</Link> Here</p>
    </AuthLayout>
  )
}
