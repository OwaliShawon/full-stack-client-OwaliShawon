import React from 'react';

const Order = (props) => {
    const { name, weight, price, imageUrl } = props.order;
    return (
        <div>
            <h1>this is order details</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default Order;