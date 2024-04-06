import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Order from "../../api/order";
import Button from "../../components/button/Button";

type orderType = {
  order: any, partner_shop_address: string, member_address: string, caregiver_address: string
}

const HomeRider = () => {

  const { type, token, user } = useSelector((state: RootState) => state.user);
  const [orders, setOrders] = useState([]);

  const handlePickup = async(order:any)=>{
    if(token){
      await Order.updateStatusRider(order.id, user.id, "is_pickup", token); 
      const updatedOrderData = await Order.getOrderRider(token);
      setOrders(updatedOrderData.data.order_details);
    }
  }
  
  const handleDelivered = async(order:any)=>{
    if(token){
      await Order.updateStatus(order.id, "is_delivered", token); 
      const updatedOrderData = await Order.getOrderRider(token);
      setOrders(updatedOrderData.data.order_details);
    }
  }

  useEffect(() => {
    (async () => {
      if (token) {
        const response = await Order.getOrderRider(token);
        setOrders(response.data.order_details);
        console.log(user);

      }
    })()
  }, [])

  return (
    <>
      <h1 className=" mt-10 mb-5 font-bold text-3xl text-green-800 ">Avaiable Delivery Routes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders?.length > 0 && orders
        .filter(({order}:orderType)=>!order.volunteer_id || order.volunteer_id==user.id)
        .map(({ order, partner_shop_address, member_address, caregiver_address }: orderType) =>
          order?.is_finished && <section key={order?.id} className="flex flex-col lg:flex gap-5 shadow-lg mb-5 py-7 px-10 border">
            <figure className="rounded mx-auto overflow-hidden aspect-square max-w-[300px]"><img src={"http://127.0.0.1:8000/uploads/meals/" + order?.image} className="object-cover w-full h-full" alt="Meal" /></figure>
            <div className="flex-1 py-3">
              <h1 className="font-bold text-2xl mb-3">{order?.name}</h1>
              <div className="mb-5">
                <div className="flex justify-between"><p className="font-bold">From</p><p className="font-bold">To</p></div>
                <div className="flex justify-between"><p>{partner_shop_address}</p><p>{caregiver_address || member_address}</p></div>
              </div>
              <div className="lg:max-w-[300px]">
                {
                  order?.is_pickup !== "true" ? <Button handleClick={handlePickup.bind(this, order)} >Pick Up</Button> : 
                  order?.is_delivered !== "true"?
                  <Button handleClick={handleDelivered.bind(this, order)} className="bg-orange-500 text-white">Delivering</Button>:
                  <Button buttonType="primary">Already Delivered</Button>
                }
              </div>

            </div>
          </section>)
        }
      </div>
    </>
  )
}

export default HomeRider