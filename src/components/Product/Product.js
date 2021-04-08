import React, { useContext, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Order from '../Order/Order';


const Product = (props) => {
    const { name, weight, price, imageUrl } = props.product;
    // console.log(product);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);

    const handleOrder = () => {
        const newOrder = { ...props.product };
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                console.log('product added to order');
            })
    }

    return (
        <div className='col-md-3'>
            <img src={imageUrl} style={{ height: '300px' }}></img>
            <h3>{name}</h3>
            <div>
                <h1>${price}</h1>
                <Button onClick={handleOrder}>Buy Now</Button>
            </div>
        </div>
    );
};

export default Product;