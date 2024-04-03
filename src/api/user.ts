import axios from "axios";
import { BASE_ADMIN_URL, BASE_URL } from "./constant";

export type UserType = "member" | "partner" | "donor" | "caregiver" | "volunteer" | "admin";
const User = (function () {

  const get = (type: UserType, token:string) => {
    return axios.get(BASE_ADMIN_URL + type,{
      headers: {
        'Authorization':`Bearer ${token}`,
      }
    });
  }

  const getOwnProfileData=(token:string)=>{
    return axios.get(BASE_URL + "profile" ,{
      headers: {
        'Authorization':`Bearer ${token}`,
      }
    });
  }

  const updateOwnProfile = (userData:any, id:number, token:string) => {    
    return axios.put(BASE_URL + "profile/" + id,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`,
        }
      }
    )
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
  const update = (type: UserType, userData:any, id:number, token:string) => {    
    return axios.put(BASE_ADMIN_URL + type + "/" + id,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`,
        }
      }
    )
  }
  const deleteAcc = (type: UserType, id:number, token:string) => {
    return axios.delete(BASE_ADMIN_URL + type + "/" + id, {
      headers: {
        'Authorization':`Bearer ${token}`,
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

  return {get, create, update, deleteAcc, uploadImg, getOwnProfileData, updateOwnProfile}
})();

export default User;