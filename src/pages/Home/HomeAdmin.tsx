import { useEffect, useState } from "react";
import User, { UserType } from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUser, updateUser } from "../../store/userSlice";
import AccUpdate from "../AccUpdate/AccUpdate";

const HomeAdmin = () => {
  const [users, setUsers] = useState([]);
  const {token, csrfToken} = useSelector((state: RootState) => state.user);
  const [currentUser, setCurrentUser] = useState<any>();
  const [isEditable, setIsEditable] = useState<boolean>();
  const dispatch = useDispatch();
  console.log(csrfToken);
  
  const handleChange = async(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const userType:any = e.target.value;
    if(token){
      const response = await User.get(userType, token);
      const profile = await response.data.Profile;
      const users = await response.data[userType];
      console.log(userType);
      
      const userData = users.map((user:any)=>{
        const user_profile = profile.find((p:any)=>p[0].user_id==user.user_id);
        let data;
        try{
          data  = user_profile[0];
        }catch(e){
          console.log(e);
        }
        return {...user, ...data}
      })
      setUsers(userData)
      console.log("user data",userData);
      console.log("response",response);
      console.log("hello",response?.data["CSRF Token"]);
      dispatch(updateUser(response?.data["CSRF Token"]));
      console.log(csrfToken);
      
    }
  }
  const handleEditOpen = async(user:any, e)=>{    
    setCurrentUser(user);
    setIsEditable(!isEditable);
  }
  

  useEffect(()=>{    
    (async ()=>{
      if(token){
        const response = await User.get("member", token);
        const profile = response.data.Profile
        const users = response.data.member        
        
        const userData = users.map((user:any)=>{
          const user_profile = profile.find((p:any)=>p[0].user_id==user.user_id);
          console.log("user profile",user_profile[0]);
          return {...user, ...user_profile[0]}
        })
        console.log("user data", userData);
        
        setUsers(userData);
        console.log("user data",userData);        
        console.log("CSRF Token",response?.data["CSRF Token"]);
        dispatch(updateUser(response?.data["CSRF Token"]));
      }
      // console.log("response",response?[data]?["CSRF Token"]);
    })();
  },[])

  return (
    <>
      {!isEditable?
        <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-green-800 font-bold mt-10 mb-5 uppercase pb-1 border-b">User management</h2>
          <select  onChange={handleChange} className="h-fit py-2 px-3 shadow text-green-800 rounded">
            <option value="member">Member</option>
            <option value="caregiver">Care Giver</option>
            <option value="partner">Partner</option>
            <option value="donor">Donor</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-green-500">
            <thead className="text-xs text-white uppercase bg-green-700 ">
              <tr>
                {users.length>0 && Object.keys(users[0]).map((user,id)=>{
                  if(user!="created_at" && user!="updated_at" && user!="user_id" && user!="user")
                  return <th key={id} scope="col" className="px-6 py-3">{user}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {
                users.map((user:any,index)=>{
                  user["edit"]=true;
                  
                  return  <tr key={index}>
                    {Object.keys(user).map((key,index)=>{
                      if(key==="edit"){
                        return <td key={index}><button onClick={handleEditOpen.bind(this, user)} >Edit</button></td>
                      }
                      if(key!="created_at" && key!="updated_at" && key!="user_id" && key!="user"){
                        return <td key={index} className="px-6 py-4 text-black">{user[key]}</td>
                      }
                    }
                    )}
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
  
      </div>:<AccUpdate data={currentUser} type={currentUser?.user?.type} csrf={csrfToken} token={token}/>
      }
    </>
  )
}

export default HomeAdmin