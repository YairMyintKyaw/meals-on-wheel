import axios from "axios";
import { BASE_URL } from "./constant";

export type UserType = "member" | "partner" | "donor" | "caregiver" | "volunteer";
const User = (function () {

  const get = (type: UserType) => {
    return axios.get(BASE_URL + type);
  }
  const create = (type: UserType, userData:any) => {
    return axios.post(BASE_URL + type,
      userData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
  const update = (type: UserType, userData:any, id:number) => {
    return axios.post(BASE_URL + type + "/" + id,
      userData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
  const deleteAcc = (type: UserType, id:number) => {
    return axios.delete(BASE_URL + type + "/" + id);
  }

  return {get, create, update, deleteAcc}
})();

export default User;