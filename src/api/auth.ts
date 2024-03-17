import axios from "axios";

export class Auth{
    name:string;
    email:string;
    _token:string = "";
    _apiUrl:string = "http://127.0.0.1:8000/api/";
    constructor(name:string = "John", email:string = "john6@gmail.com"){
        this.name= name;
        this.email = email;
    }
    register(password:string){
        axios.post(this._apiUrl+"register",
            {
                "name" : this.name,
                "email" : this.email,
                "password" : password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response=>{
                console.log(response)
                this._token = response.data.token
            })
            .catch(error=>console.log(error))
    }

    login(password:string){
        axios.post(this._apiUrl+"login",
            {
                "email":this.email,
                "password":password
            },
            {
                headers: {
                    Authorization: `Bearer ${this._token}`
                }
            }
        )
    }

    logout(){
        axios.post(this._apiUrl+"logout");  
    }


}