import React from "react"
import './MyOrders.css'
import axios from "axios";
const MyOrders = () => {


    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);


    const fecthOrder = async () => {
        const response = await axios.pot(url+"/api/orders/userorders",{},{headers:{token}});
        setData(response.data.data);
        console.log(); 
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])
    
    return (
        <div className= "my-orders">
            <h2>My Orders</h2>
            <div className="container">
               {data.map((order,index)=>{
                return (
                    <div key={index} className= "my-orders-orders">
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index === order.item.length-1) {
                                return item.name+" x "+item.quantity
                            }
                            else{
                                return item.name+" x "+item.quantity+", "
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Item: {order.items.length}</p>
                        <p><span>"x25cf;"</span> <b>{order.status}</b></p>
                        <button>Track Order</button>
                    </div>

                )
            })} 
            </div>

        </div>
    )
}

export default MyOrders
