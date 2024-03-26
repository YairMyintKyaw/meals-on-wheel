import axios from "axios";

const Auth = (function () {
  const _apiUrl: string = "http://127.0.0.1:8000/api/";

  async function register (register_form: any) {
    return await axios.post(_apiUrl + "register",
      register_form,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }

  function login(email: string, password: string) {
    axios.post(_apiUrl + "login",
      {
        "email": email,
        "password": password
      },
      // {
      //     headers: {
      //         Authorization: `Bearer ${_token}`
      //     }
      // }
    )
  }
  function logout() {
    axios.post(_apiUrl + "logout");
  }

  return { register, login, logout }
})();

export default Auth;