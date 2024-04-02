import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ObjectSchema, object, string, ref } from "yup";
import { FieldConfig } from "../components/Form/Form";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setUpForm = (formType: string | undefined): any => {
  switch (formType) {
    case "member": {
      interface FormValues {
        first_name: string;
        last_name: string;
        gender: string;
        age: string | number;
        phone_number: string | number;
        emergency_contact_number: string | number;
        date_of_birth: string;
        address: string;
        dietary_restriction: string;
        image: string 
      }
      const validationSchema: ObjectSchema<FormValues> = object({
        first_name: string().required("First Name is required"),
        last_name: string().required("Last Name is required"),
        gender: string().required("Gender is required"),
        age: string().required("Age is required"),
        phone_number: string().required("Phone Number is required"),
        emergency_contact_number: string().required("Phone Number is required"),
        date_of_birth: string().required("Date of Birth is required"),
        address: string().required("Address is required"),
        dietary_restriction: string().required("Dietary Restrictions is required"),
      });
      const fields: FieldConfig[] = [
        { name: "first_name", label: "First Name", type: "text" },
        { name: "last_name", label: "Last Name", type: "text" },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["male", "female"],
        },
        { name: "age", label: "Age", type: "number" },
        { name: "phone_number", label: "Phone Number", type: "number" },
        { name: "emergency_contact_number", label: "Emergency Contact Number", type: "number" },
        { name: "date_of_birth", label: "Date of Birth", type: "date" },
        { name: "address", label: "Delivery Address", type: "text" },
        { name: "dietary_restriction", label: "Dietary Restrictions", type: "text" },
        { name: "image", label: "Profile Picture", type: "file", accept: "image/png, image/jpeg" },
      ];
      const initialValues: FormValues = {
        first_name: "",
        last_name: "",
        gender: "",
        age: "",
        phone_number: "",
        emergency_contact_number: "",
        date_of_birth: "",
        address: "",
        dietary_restriction: "",
        image:""
      };
      return { initialValues, validationSchema, fields };
    }
    case "caregiver": {
      interface FormValues {
        first_name: string;
        last_name: string;
        gender: string;
        phone_number: string | number;
        date_of_birth: string;
        address: string;
        relationship_with_member:string;
        image: string
      }
      const validationSchema: ObjectSchema<FormValues> = object({
        first_name: string().required("First Name is required"),
        last_name: string().required("Last Name is required"),
        gender: string().required("Gender is required"),
        phone_number: string().required("Phone Number is required"),
        date_of_birth: string().required("Date of Birth is required"),
        relationship_with_member: string().required("Date of Birth is required"),
        address: string().required("Address is required"),
        
      });
      const fields: FieldConfig[] = [
        { name: "first_name", label: "First Name", type: "text" },
        { name: "last_name", label: "Last Name", type: "text" },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["male", "female"],
        },
        { name: "phone_number", label: "Phone Number", type: "number" },
        { name: "date_of_birth", label: "Date of Birth", type: "date" },
        { name: "relationship_with_member", label: "Relationship with member", type: "text" },
        { name: "address", label: "Delivery Address", type: "text" },
        { name: "image", label: "Profile Picture", type: "file", accept: "image/png, image/jpeg" }
      ];
      const initialValues: FormValues = {
        first_name: "",
        last_name: "",
        gender: "",
        phone_number: "",
        date_of_birth: "",
        address: "",
        relationship_with_member:"",
        image: ""
      };
      return { initialValues, validationSchema, fields };
    }
    case "partner": {
      interface FormValues {
        first_name: string;
        last_name: string;
        address: string;
        phone_number: string | number;
        shop_name:string;
        shop_address:string;
        image: string
      }
      const validationSchema: ObjectSchema<FormValues> = object({
        first_name: string().required("First Name is required"),
        last_name: string().required("Last Name is required"),
        address: string().required("Address is required"),
        phone_number: string().required("Phone Number is required"),
        shop_name: string().required("Shop name is required"),
        shop_address: string().required("Shop address is required"),
      });
      const fields: FieldConfig[] = [
        { name: "first_name", label: "First Name", type: "text" },
        { name: "last_name", label: "Last Name", type: "text" },
        { name: "address", label: "Delivery Address", type: "text" },
        { name: "phone_number", label: "Phone Number", type: "number" },
        { name: "shop_name", label: "Shop Name", type: "text" },
        { name: "shop_address", label: "Shop address with member", type: "text" },
        { name: "image", label: "Profile Picture", type: "file", accept: "image/png, image/jpeg" }
      ];
      const initialValues: FormValues = {
        first_name: "",
        last_name: "",
        address: "",
        phone_number: "",
        shop_name: "",
        shop_address:"",
        image: ""
      };
      return { initialValues, validationSchema, fields };
    }
    case "donor":{
      interface FormValues {
        first_name: string;
        last_name: string;
        gender:string;
        phone_number: string | number;
        date_of_birth: string;
        address: string;
        image: string
      }
      const validationSchema: ObjectSchema<FormValues> = object({
        first_name: string().required("First Name is required"),
        last_name: string().required("Last Name is required"),
        gender: string().required("Gender is required"),
        phone_number: string().required("Phone Number is required"),
        date_of_birth: string().required("Date of birth is required"),
        address: string().required("Address is required"),
        
      });
      const fields: FieldConfig[] = [
        { name: "first_name", label: "First Name", type: "text" },
        { name: "last_name", label: "Last Name", type: "text" },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["male", "female"],
        },
        { name: "phone_number", label: "Phone Number", type: "number" },
        { name: "date_of_birth", label: "Date Of Birth", type: "date" },
        { name: "address", label: "Delivery Address", type: "text" },
        { name: "image", label: "Profile Picture", type: "file", accept: "image/png, image/jpeg" }
      ];
      const initialValues: FormValues = {
        first_name: "",
        last_name: "",
        gender: "",
        phone_number: "",
        date_of_birth: "",
        address: "",
        image: ""
      };
      return { initialValues, validationSchema, fields };
    }
    case "volunteer":{
      interface FormValues {
        first_name: string;
        last_name: string;
        gender:string;
        phone_number: string | number;
        date_of_birth: string;
        address: string;
        image: string
      }
      const validationSchema: ObjectSchema<FormValues> = object({
        first_name: string().required("First Name is required"),
        last_name: string().required("Last Name is required"),
        gender: string().required("Gender is required"),
        phone_number: string().required("Phone Number is required"),
        date_of_birth: string().required("Date of birth is required"),
        address: string().required("Address is required"),
        
      });
      const fields: FieldConfig[] = [
        { name: "first_name", label: "First Name", type: "text" },
        { name: "last_name", label: "Last Name", type: "text" },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["male", "female"],
        },
        { name: "phone_number", label: "Phone Number", type: "number" },
        { name: "date_of_birth", label: "Date Of Birth", type: "date" },
        { name: "address", label: "Delivery Address", type: "text" },
        { name: "image", label: "Profile Picture", type: "file", accept: "image/png, image/jpeg" }
      ];
      const initialValues: FormValues = {
        first_name: "",
        last_name: "",
        gender: "",
        phone_number: "",
        date_of_birth: "",
        address: "",
        image: ""
      };
      return { initialValues, validationSchema, fields };
    }
    case "meal":{
      interface FormValues {
        "name" : string,
        "ingredients" : string,
        "allergy_information" : string,
        "nutritional_information" : string,
        "dietary_restrictions" : string,
        "price" : number,
        "is_frozen" : boolean,
        "delivery_status" : boolean,
        "image" : File,
        "temperature" : string
      }        
      const validationSchema: ObjectSchema<FormValues> = object({
        name: string().required("First Name is required"),
        ingredients: string().required("Last Name is required"),
        allergy_information: string().required("Gender is required"),
        nutritional_information: string().required("Phone Number is required"),
        dietary_restrictions: string().required("Delivery Status is required"),
      });
      const fields: FieldConfig[] = [
        { name: "name", label: "Name", type: "text" },
        { name: "ingredients", label: "Ingredients", type: "text" },
        { name: "allergy_information", label: "Allergy information", type: "text" },
        { name: "nutritional_information", label: "Nutritional Information", type: "text" },
        { name: "dietary_restrictions", label: "Dietary restrictions", type: "text" },
        { name: "price", label: "Price", type: "number" },
        { name: "temperature", label: "Temperature", type: "text" },
        { name: "is_frozen", label: "Is the food frozen?", type: "checkbox" },
        { name: "delivery_status", label: "Delivery Status", type: "checkbox" },
        { name: "image", label: "Picture", type: "file", accept: "image/png, image/jpeg" }
      ];
      const initialValues: FormValues = {
        "name" : "",
        "ingredients" : "",
        "allergy_information" : "",
        "nutritional_information" : "",
        "dietary_restrictions" : "",
        "price" : 0,
        "is_frozen" : false,
        "delivery_status" : false,
        "temperature" : ""
      };
      return { initialValues, validationSchema, fields };
    }
    default: {
      interface FormValues {
        email: string;
        user_name: string;
        password: string;
        confirm_password: string;
      }
      const validationSchema = object({
        email: string().required("Email is required"),
        user_name: string().required("Name is required"),
        password: string().required("Password is required"),
        confirm_password: string()
          .oneOf([ref('password')], 'Passwords must match')
          .required("Confirm Password is required"),
      });
      const fields: FieldConfig[] = [
        { name: "email", label: "Email", type: "text" },
        { name: "user_name", label: "User Name", type: "text" },
        { name: "password", label: "Password", type: "text" },
        { name: "confirm_password", label: "Confirm Password", type: "text" },
      ];
      const initialValues: FormValues = {
        email: "",
        user_name: "",
        password: "",
        confirm_password: "",
      };
      return { initialValues, validationSchema, fields };
    } // Default empty schema
  }
};
