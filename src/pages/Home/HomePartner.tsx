import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePartner = () => {
  const nav = useNavigate();
  const type = useSelector((state: RootState) => state.user.type);
  useEffect(()=>{
    // check the user type
    if(type!=="partner") nav("/")
  },[])
  return (
    <div className="mt-10 min-h-[80vh]">
      <h2 className="text-3xl mb-5">Orders</h2>
      <p>You have no order yet</p>
    </div>
  )
}

export default HomePartner