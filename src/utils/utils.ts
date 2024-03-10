import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ObjectSchema, object, string } from "yup";
import { FieldConfig } from "../components/form/Form";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setUpForm = (formType: string | undefined): any => {
  switch (formType) {
    case "member": {
      interface FormValues {
        name: string;
        gender: string;
        age: string | number;
        phNumber: string | number;
        contact: string;
        dob: string;
        address: string;
        dietary: string;
      }
      const validationSchema: ObjectSchema<FormValues> = object({
        name: string().required("User Name is required"),
        gender: string().required("Gender is required"),
        age: string().required("Age is required"),
        phNumber: string().required("Phone Number is required"),
        contact: string().required("Contact is required"),
        dob: string().required("Date of Birth is required"),
        address: string().required("Address is required"),
        dietary: string().required("Dietary Restrictions is required"),
      });
      const fields: FieldConfig[] = [
        { name: "name", label: "Name", type: "text" },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["Male", "Female"],
        },
        { name: "age", label: "Age", type: "number" },
        { name: "phNumber", label: "Phone Number", type: "number" },
        { name: "contact", label: "Emergency Contact Number", type: "number" },
        { name: "dob", label: "Date of Birth", type: "date" },
        { name: "address", label: "Delivery Address", type: "text" },
        { name: "dietary", label: "Dietary Restrictions", type: "text" },
      ];
      const initialValues: FormValues = {
        name: "",
        gender: "",
        age: "",
        phNumber: "",
        contact: "",
        dob: "",
        address: "",
        dietary: "",
      };
      return { initialValues, validationSchema, fields };
    }
    case "careGiver":
      return object({});
    case "donator":
      return object({
        // Define validation schema for type3 form
      });
    case "volunteer":
      return object({
        // Define validation schema for type3 form
      });
    case "partner":
      return object({
        // Define validation schema for type3 form
      });
    default: {
      interface FormValues {
        email: string;
        name: string;
        password: string;
        confirm_password: string;
      }
      const validationSchema: ObjectSchema<FormValues> = object({
        email: string().required("User Name is require"),
        name: string().required("Gender is require"),
        password: string().required("Age is require"),
        confirm_password: string().required("Phone Number is require"),
      });
      const fields: FieldConfig[] = [
        { name: "email", label: "Email", type: "text" },
        { name: "name", label: "User Name", type: "text" },
        { name: "password", label: "Password", type: "text" },
        { name: "confirm_password", label: "Confirm Password", type: "text" },
      ];
      const initialValues: FormValues = {
        email: "",
        name: "",
        password: "",
        confirm_password: "",
      };
      return { initialValues, validationSchema, fields };
    } // Default empty schema
  }
};
