import axios from "axios";
import { BASE_ADMIN_URL, BASE_URL } from "./constant";

export type UserType = "member" | "partner" | "donor" | "caregiver" | "volunteer";
const User = (function () {

  const get = (type: UserType, token:string) => {
    return axios.get(BASE_ADMIN_URL + type,{
      headers: {
        'Authorization':`Bearer ${token}`,
      }
    });
  }

  const create = (type: UserType, userData:any, token:string, csrf:string) => {
    return axios.post(BASE_ADMIN_URL + type,
      userData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':`Bearer ${token}`,
          "X-CSRF-TOKEN" : csrf
        }
      }
    )
  }
  const update = (type: UserType, userData:any, id:number, token:string, csrf:string) => {
    console.log(csrf);
    return axios.put(BASE_ADMIN_URL + type + "/" + id,
      userData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':`Bearer ${token}`,
          "X-CSRF-TOKEN" : csrf
        }
      }
    )
  }
  const deleteAcc = (type: UserType, id:number, token:string, csrf:string) => {
    return axios.delete(BASE_ADMIN_URL + type + "/" + id, {
      headers: {
        'Authorization':`Bearer ${token}`,
        "X-CSRF-TOKEN" : csrf
      }
    });
  }

  const uploadImg = (image:File, token:string)=>{
    return axios.post(BASE_URL+"profile/upload",
      {image},{
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':`Bearer ${token}`
        }
      }
      
    )
  }

  return {get, create, update, deleteAcc, uploadImg}
})();

export default User;