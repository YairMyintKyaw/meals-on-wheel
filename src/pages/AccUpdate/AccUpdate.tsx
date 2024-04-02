import { setUpForm } from "../../utils/utils";
import RegisterForm from "../../components/form/Form";
import { useEffect, useState } from "react";
import User, { UserType } from "../../api/user";

const AccUpdate = ({data, type, csrf, token}:{data:any, type:UserType, csrf:string|undefined, token:string|null}) => {
  const userDataform = setUpForm(type);
  const [previousImage, setPreviousImage] = useState("");
  console.log(csrf);
  
  const handleSubmit = async (values:any)=>{
    console.log(values);
    console.log(values.image, data.image);
    
    console.log((values.image != previousImage));
    
    if((values.image != data.image) && token){

      const response = await User.uploadImg(values.image, token);
      const image = response.data.imagePath.split("/")[2];
      values.image = image;
      setPreviousImage(image);
      if(csrf){
        const test = {
          "first_name": "Jack",
          "last_name": "Johnson",
          "gender": "Male",
          "phone_number": "0977121434",
          "date_of_birth": "23/4/2004",
          "address": "Yangon",
          "image": image
        };
        console.log(test);
        
        const response2 = await User.update(type, test, data.id, token, csrf);
        console.log(response2);
      }
    }else if(token){
      const test = {
        "first_name": "Jack",
        "last_name": "Johnson",
        "gender": "Male",
        "phone_number": "0977121434",
        "date_of_birth": "23/4/2004",
        "address": "Yangon",
      };
      if(csrf) {
        const response2 = await User.update(type, test, data.id, token, csrf);
        console.log(response2);
        
      }
    }
    console.log("submit");
  }
  return (
    <div className="max-w-[500px] mx-auto py-5 px-3">
      <h1 className="text-center text-xl mb-5 text-green-800 font-bold">Update the data</h1>
      <RegisterForm
        initialValues={data}
        validationSchema={userDataform.validationSchema}
        fields={ userDataform.fields}
        onSubmit={handleSubmit}
        submitButtonText="Next"
        backendError={{}}
      />
    </div>
  )
}

export default AccUpdate