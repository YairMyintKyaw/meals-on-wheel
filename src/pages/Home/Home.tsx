import { useSelector } from "react-redux"
import { RootState } from "../../store/store";
import { ObjectSchema, number, object, string } from "yup";
import RegisterForm, { FieldConfig } from "../../components/form/Form";
import Navigation from "../../components/Navigation/Navigation";
export default function Home() {
  const user = useSelector((state: RootState) => state.user);

  interface FormValues {
    firstName: string;
    age: number;
    email: string;
    accept?: string
  }

  const initialValues: FormValues = {
    firstName: '',
    age: 0,
    email: '',
    accept: ""
  };

  const validationSchema: ObjectSchema<FormValues> = object({
    firstName: string().required('First Name is required'),
    age: number().required('Age is required'),
    email: string().required("email is required"),
    accept: string().required("this is needed")
  });

  const fields: FieldConfig[] = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'age', label: 'Age', type: 'number' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'img', label: 'img', type: 'file', accept: "image/png, image/jpeg" },
  ];

  const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    // Handle form submission logic here
    console.log(values.accept);
    setSubmitting(false);
  };

  return (

    <>
      <Navigation />
      {/* <RegisterForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={fields}
        onSubmit={handleSubmit}
        submitButtonText="Submit"
      /> */}
      <div>Home</div>

    </>
  )
}