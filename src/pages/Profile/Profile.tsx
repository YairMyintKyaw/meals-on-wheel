import { useSelector } from "react-redux";
import PageLayout from "../../components/Layout/PageLayout"
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import User from "../../api/user";
import { setUpForm } from "../../utils/utils";
import RegisterForm from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function flattenObject(obj: any, parentKey = ''): { [key: string]: any } {
  let flattenedObj: { [key: string]: any } = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flattenedObj, flattenObject(obj[key], parentKey));
    } else {
      flattenedObj[parentKey + key] = obj[key];
    }
  }
  return flattenedObj;
}


const Profile = () => {
  const { token, type } = useSelector((state: RootState) => state.user);
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState<any>({ image: "" });
  const userDataform = setUpForm(type ? type : "");
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      if (type && token) {
        const response = await User.getOwnProfileData(token);
        console.log(response.data);
        setUserData(flattenObject(response.data));
        console.log(flattenObject(response.data));
      }
    })()
  }, [])

  const handleToggleEdit = () => {
    setIsEditable(!isEditable);
  }
  const handleSubmit = async(values:any) => {
    console.log(values);
    if((values.image != userData.image)&&token){
      const imageUpload = await User.uploadImg(values.image, token)
      const image = imageUpload.data.imagePath.split("/")[2];
      values.image = image;
    }
    if(token && type) {
      const id = values.id;
      delete values.created_at;
      delete values.updated_at;
      delete values.edit;
      delete values.user;
      delete values.user_id;
      delete values.id;
      delete values.type;
      delete values.role_as;
      delete values.user_name;
      console.log("upload data",values);
      const response = await User.updateOwnProfile( values, id, token);
      console.log(response);
      
    }
  }


  return (
    <PageLayout>
        {isEditable ? <Button buttonType="back" className=" mt-5" handleClick={handleToggleEdit}>Back</Button>:""}
      <div className="flex flex-col lg:flex-row mt-10 gap-5">
        <h1 className="mt-5 textneu text-green-800 font-bold text-2xl">User Profile</h1>
        <figure className="flex-1 rounded overflow-hidden aspect-square max-w-[300px] mx-auto"><img src={"http://127.0.0.1:8000/uploads/profile/" + userData.image} className="object-contain w-full h-full" alt="Profile Pic" /></figure>
        <div className="flex-1 lg:flex-[2]">
          {isEditable ?
            userData.id ?
              <RegisterForm
                initialValues={userData}
                validationSchema={userDataform.validationSchema}
                fields={userDataform.fields}
                onSubmit={handleSubmit}
                backendError={userDataform.backendErrors}
                submitButtonText="Submit"
                className="max-w-[500px] mx-auto mb-10"
              /> : ""
            : <div>
              {Object.keys(userData).map(key => {
                if (key != "created_at" && key != "id" && key != "image" && key != "role_as" && key != "updated_at" && key != "user_id" && key != "user_name")
                  return <section key={userData.id} className="mb-3 flex border-b border-b-neutral-100 py-3 flex-wrap">
                    <h2 className="uppercase font-bold text-lg w-[300px]">{key}</h2>
                    <p className="text-green-800 text-lg">{userData[key]}</p>
                  </section>;
              })}
              <div>
                <Button handleClick={handleToggleEdit} buttonType="primary" className="max-w-[200px] mt-5">Edit</Button>
              </div>
            </div>
          }
        </div>
      </div>
    </PageLayout>
  )
}

export default Profile