import axios from "axios";
import { BASE_URL } from "./constant";

const Auth = (function () {

  async function register (register_form: any) {
    return await axios.post(BASE_URL + "register",
      register_form,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  }

  async function login(email: string, password: string) {
    return await axios.post(BASE_URL + "login",
      {
        "email": email,
        "password": password
      }
    ).catch((error)=>{
      return error
    })
  }
  function logout() {
    axios.post(BASE_URL + "logout");
  }

  return { register, login, logout }
})();

export default Auth;