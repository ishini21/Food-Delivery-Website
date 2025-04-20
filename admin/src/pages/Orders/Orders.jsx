import React from 'react'
import './Order.css'
import { useState } from 'react'
import axios from "axios";

function Orders({url}) {

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async () => {

    const response = await axios.get(url+"/api/order/list");


  }
  return (
    <div>
      Orders
    </div>
  )
}

export default Orders
