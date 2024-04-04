import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Order from "../../api/order";

const HomeRider = () => {

  const { type, token } = useSelector((state: RootState) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    (async () => {
      if (token) {
        const response = await Order.getOrder(token);
        setOrders(response.data.Orders);
      }
      console.log(orders);    
    })()
  },[])
  return (
    <div>
      {orders.map((order:any)=><section>
          {order.name}
      </section>)}
    </div>
  )
}

export default HomeRider