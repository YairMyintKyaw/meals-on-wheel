import { useEffect, useRef, useState } from "react";
import User, { UserType } from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUser, updateUser } from "../../store/userSlice";
import AccUpdate from "../AccUpdate/AccUpdate";

const HomeAdmin = () => {
  const [users, setUsers] = useState([]);
  const {token} = useSelector((state: RootState) => state.user);
  const ref = useRef(null);
  const [currentUser, setCurrentUser] = useState<any>();
  const [isEditable, setIsEditable] = useState<boolean>();
  
  const handleChange = async(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const userType:any = e.target.value;
    if(token){
      const response = await User.get(userType, token).catch(e=>setUsers([]));
      const profile = await response?.data.Profile;
      const users = await response?.data[userType];
      
      const userData = users.map((user:any)=>{
        const user_profile = profile.find((p:any)=>p[0].user_id==user.user_id);
        let data;
        try{
          data  = user_profile[0];
        }catch(e){
          console.log(e);
        }
        return {...data, ...user}
      })
      setUsers(userData);
    }
  }
  const handleEditOpen = async(user:any)=>{    
    setCurrentUser(user);
    setIsEditable(!isEditable);
  }

  const handleDelete = async(user:any)=>{
    if(token) {
      const response = await User.deleteAcc(user.user.type, user.id, token);
      if(response.data.message && ref.current){
        const userType:any = (ref.current as HTMLSelectElement).value;
        const response = await User.get(userType, token).catch(e=>setUsers([]));
        const profile = await response?.data.Profile;
        const users = await response?.data[userType];
        const userData = users.map((user:any)=>{
          const user_profile = profile.find((p:any)=>p[0].user_id==user.user_id);
          let data;
          try{
            data  = user_profile[0];
          }catch(e){
            console.log(e);
          }
          return {...data, ...user}
        })
        setUsers(userData); 
      }      
      
    };
  }

  

  useEffect(()=>{    
    (async ()=>{
      if(token){
        const response = await User.get("member", token).catch(e=>setUsers([]));
        const profile =  response?.data.Profile;
        const users =  response?.data["member"];
        console.log(users);
        
        if(users){
          const userData = users.map((user:any)=>{
            const user_profile = profile.find((p:any)=>p[0].user_id==user.user_id);
            let data;
            try{
              data  = user_profile[0];
            }catch(e){
              console.log(e);
            }
            return {...data, ...user}
          })
          setUsers(userData);
        }
      }
    })();
  },[isEditable])

  return (
    <>
      {!isEditable?
        <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-green-800 font-bold mt-10 mb-5 uppercase pb-1 border-b">User management</h2>
          <select ref={ref}  onChange={handleChange} className="h-fit py-2 px-3 shadow text-green-800 rounded">
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
                {users.length>0 && Object.keys(users[0]).map((user:any,id)=>{
                  if(user!="created_at" && user!="updated_at" && user!="user_id" && user!="user")
                  return <th key={id} scope="col" className="px-6 py-3">{user}</th>
                })}
                {users.length>0 ? <>
                  <th className="px-6 py-3">Edit</th>
                  <th className="px-6 py-3">Delete</th>
                </>:<th className="text-xl text-white py-3 px-5 font-bold ">There is no account for this type</th>}
              </tr>
            </thead>
            <tbody>
              {
                users.map((user:any,index)=>{
                  user["edit"]=true;
                  user["delete"]=true;
                  
                  return  <tr key={index}>
                    {Object.keys(user).map((key,index)=>{
                      if(key==="edit"){
                        return <td key={index} className="px-6 py-4 text-green-800"><button onClick={handleEditOpen.bind(this, user)} >Edit</button></td>
                      }else if(key==="delete"){
                        return <td key={index} className="px-6 py-4 text-red-800"><button onClick={handleDelete.bind(this, user)} >Delete</button></td>
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
  
      </div>:<AccUpdate data={currentUser} type={currentUser?.user?.type} token={token} closeEdit={setIsEditable}/>
      }
    </>
  )
}

export default HomeAdmin