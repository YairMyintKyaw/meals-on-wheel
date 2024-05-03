import { setUpForm } from "../../utils/utils";
import RegisterForm from "../../components/form/Form";
import User, { UserType } from "../../api/user";

const AccUpdate = ({data, type, token, closeEdit}:{data:any, type:UserType, token:string|null, closeEdit:any}) => {
  const userDataform = setUpForm(type);
  const handleSubmit = async (values:any)=>{    
    if((values.image != data.image) && token){

      const imgUpload = await User.uploadImg(values.image, token);
      const image = imgUpload.data.imagePath.split("/")[2];
      values.image = image;
      //delete unecessary key
      delete values.created_at;
      delete values.updated_at;
      delete values.edit;
      delete values.user;
      delete values.user_id;
      delete values.id;
      console.log("vales", values);
      console.log("id", data.id);
      const response = await User.update(type, values, data.id, token);
      if(response.data.message=="Date updated") closeEdit(false);
    }else if(token){
      console.log("vales", values);
      values.image=data.image;
      delete values.created_at;
      delete values.updated_at;
      delete values.edit;
      delete values.user;
      delete values.user_id;
      delete values.id;
      const response = await User.update(type, values, data.id, token);
      if(response?.data.message=="Date updated") closeEdit(false);        
    }
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