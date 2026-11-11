import React from 'react'
import './Orders.css'
import { useState } from 'react'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import axios from "axios"
import {assets} from "../../assets/assets"

const Orders = ({url}) => {
    const [orders,setOrders] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.get(url+"/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
            console.log(response.data.data);
        }
        else {
            toast.error("Error")
        }
    }

    useEffevt(() =>{
        fetchAllOrders();
    },[])
  return (
    <div className='orders add'>
      <h3>Order Page</h3>
      <div className="order-list">
         {orders.map((order,index)=>(
          <div key={index} className='order-item'>
        <img src={asset.parcel_icon} alt="" />
        <div>
          <p className='order.item.food'>
              {order.items.map((item,index)=>{
                 if (index===order.items.lenght-1) {
                    return item.name + " x " + item.quantity
                 }
                 else{
                    return item.name + " x " + item.quantity + ", "
                }
              })}
          </p>
          <p className="order-item-name">{order.address.firstName+" "+order.address.lastName}</p>
          <div className="order-item-address">
            <p>{order.address.street+","}</p>
            <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
          </p>
        </div>
        <p className='order-item-phone'>{order.address.phone}</p>
        </div>
        <p>Items : {order.items.lenght}</p>
        <p>${order.amount}</p>
        <select>
            <option value="Food Proccessing">Food Proccessing</option>
            <option value="Out for delivery">Out of delivery</option>
            <option value="Delivered">Delivered</option>
        </select>
        </div>
      ))}

      </div>

    </div>
  )
}
    