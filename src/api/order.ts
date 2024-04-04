import axios from "axios";
import { BASE_URL } from "./constant";

const Order = (function () {

  async function register(register_form: any, token: string) {
    return await axios.post(BASE_URL + "order",
      register_form,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    )
  }
  async function getOrder(token: string) {
    return await axios.get(BASE_URL + "orders",
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    )
  }

  async function getOrderRider(token: string) {
    return await axios.get(BASE_URL + "order",
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    )
  }

  async function updateStatus(id: number, status: string, token: string) {
    return await axios.put(BASE_URL + "order/" + id, {
      [status]: "true"
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
    )
  }

  async function updateStatusRider(orderId: number, riderid: number, status: string, token: string) {
    return await axios.put(BASE_URL + "order/" + orderId, {
      [status]: "true",
      "volunteer_id":riderid
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
    )
  }

  return { register, getOrder, updateStatus, getOrderRider, updateStatusRider }
})();

export default Order;