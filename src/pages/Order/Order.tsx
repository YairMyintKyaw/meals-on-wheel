import { useEffect, useState } from "react"
import PageLayout from "../../components/Layout/PageLayout"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import OrderApi from "../../api/order";
import { cn } from "../../utils/utils";
import { BiRefresh } from "react-icons/bi";
const Order = () => {
    const nav = useNavigate();
    const {type, token} = useSelector((state: RootState) => state.user);
    const [orders, setOrders] = useState([]);


    const handleUpdateStatus = async()=>{
        if(token){
            const resposne = await OrderApi.getOrder(token); 
            setOrders(resposne.data.Orders);
        }
    }
    useEffect(()=>{
        if(type!=="member"){
            nav("/")
        }
        (async()=>{
            if(token){
                const resposne = await OrderApi.getOrder(token); 
                console.log(resposne.data.Orders);
                setOrders(resposne.data.Orders);
            }
        })()
    },[])
  return (
    <PageLayout>
        <div>
            <div className="flex justify-between items-center mt-10 mb-5">
                <h1 className="text-2xl font-bold text-green-800">Orders</h1>
                <button onClick={handleUpdateStatus}><BiRefresh className="text-green-800 text-3xl"/></button>
            </div>
            {
                orders?.map((order:any)=><section key={order.id} className="flex items-center shadow-lg mb-5">
                    <figure className="rounded overflow-hidden aspect-square max-w-[300px]"><img src={"http://127.0.0.1:8000/uploads/meals/" + order.image} className="object-cover w-full h-full" alt="Meal" /></figure>
                    <div className="flex-1 py-3">
                        <h1 className="font-bold text-2xl mb-3">{order.name}</h1>
                        <p className={cn("font-bold text-lg bg-yellow-500 w-fit px-4 py-2 text-white rounded",
                                    {"bg-green-800":order.is_delivered==="true"})}>
                            {
                                order.is_delivered==="true"?"Delivered":
                                order.is_pickup==="true"?"Delivering":
                                order.is_finished==="true"?"Ready To Deliver":
                                order.is_preparing==="true"?"Preparing":
                                "Ordered meal"
                            }
                        </p>
                        
                    </div>
                </section>)
            }
        </div>
    </PageLayout>
  )
}

export default Order