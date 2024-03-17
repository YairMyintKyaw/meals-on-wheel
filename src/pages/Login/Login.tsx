import { ObjectSchema, object, string } from "yup";
import AuthLayout from "../../components/Layout/AuthLayout"
import RegisterForm, { FieldConfig } from "../../components/Form/Form";
import { Field } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  interface FormValues {
    username: string,
    password: string
  }

  const initialValues: FormValues = {
    username: "",
    password: ""
  };

  const validationSchema: ObjectSchema<FormValues> = object({
    username: string().required('User Name or Email is require'),
    password: string().required('Password is required')
  });

  const fields: FieldConfig[] = [
    { name: 'username', label: 'User Name (or) Email Address', type: 'text' },
    { name: 'password', label: 'Password', type: 'text' },
  ];

  const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    // Handle form submission logic here
    setSubmitting(false);
  };
  return (
    <AuthLayout title="Welcome Back">
      <p className="text-lg font-medium mb-[24px] text-neutral-500">Let's catch you up on what's happening at MerryMeal.</p>
      <RegisterForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={fields}
        onSubmit={handleSubmit}
        submitButtonText="Submit"
      >
        <div className="flex justify-between mb-[48px]">
          <label htmlFor="remember_me" className="flex items-center gap-2 cursor-pointer"><Field type="checkbox" id="remember_me" name="remember_me" className="border-[1px] w-[18px] h-[18px]" />Remember me</label>
          <Link to={"/"}>Forgot password?</Link>
        </div>
      </RegisterForm>
      <p className="text-base text-neutral-800 font-medium text-center mt-[48px]">Don’t have an account ? <Link to={"/user-type"}>Sign Up</Link> here </p>
    </AuthLayout>
  )
}

export default Login