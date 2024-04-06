import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Order from "../../api/order";
import Button from "../../components/button/Button";

const HomePartner = () => {
  const nav = useNavigate();
  const { type, token } = useSelector((state: RootState) => state.user);
  const [orders, setOrders] = useState([]);

  const handleStartPrepare = async(id:number)=>{
    if(token){
      await Order.updateStatus(id, "is_preparing", token);
      const updatedOrderData = await Order.getOrder(token);
      setOrders(updatedOrderData.data.Orders);
      
    }
  }
  const handleFinish = async(id:number)=>{
    if(token){
      await Order.updateStatus(id, "is_finished", token);
      const updatedOrderData = await Order.getOrder(token);
      setOrders(updatedOrderData.data.Orders);
    }
  }
  useEffect(() => {
    // check the user type
    if (type !== "partner") nav("/");
    (async () => {
      if (token) {
        const response = await Order.getOrder(token);
        setOrders(response.data.Orders);
      }
    })()
  }, [])
  return (
    <div className="mt-10 min-h-[80vh]">
      <h2 className="text-3xl mb-5 font-bold text-green-800">Orders</h2>
      {orders?.length <= 0 ? (
        <>
          <p>You have no order yet</p>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.length>0 && orders?.map((order: any) => (
            <section key={order.id} className="flex flex-col shadow-lg mb-5 py-7 px-10">
              <figure className="rounded overflow-hidden mx-auto aspect-square max-w-[300px]">
                <img src={"http://127.0.0.1:8000/uploads/meals/" + order.image} className="object-cover w-full h-full" alt="Meal" />
              </figure>
              <div className="flex-1 py-3">
                <h1 className="font-bold text-2xl mb-3">{order.name}</h1>
                {order.is_finished=="true"?
                  <Button buttonType="primary" className="max-w-[300px]">Finished</Button>:
                order.is_preparing==="true"?
                  <Button buttonType="primary" className="bg-yellow-600 max-w-[300px]" handleClick={handleFinish.bind(this, order.id)}>Finish</Button>:
                <Button handleClick={handleStartPrepare.bind(this, order.id)} className="max-w-[300px]">Start Prepare</Button>}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
  
}

export default HomePartner