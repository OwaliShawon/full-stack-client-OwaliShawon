import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://dorakata-shop.herokuapp.com/orders')
            .then((response) => response.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            {
                orders.map((order) => <Order order={order}></Order>)
            }

        </div>
    );
};

export default Orders;