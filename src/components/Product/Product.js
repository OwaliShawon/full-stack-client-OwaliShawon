import React, { useContext, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Order from '../Order/Order';


const Product = (props) => {
    const { name, weight, price, imageUrl, _id } = props.product;
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
                console.log('product added to order list');
            })
    }

    // const handleOrder = (_id) => {
    //     const newOrder = { ...props.product };
    //     fetch('http://localhost:5000/product/' + { _id }, {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(newOrder)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             console.log('product added to order list');
    //         })
    // }


    return (
        <div className='col-md-3'>
            <img src={imageUrl} style={{ height: '200px' }}></img>
            <h5>{name}</h5>
            <div className='d-flex'>
                <h2>${price}</h2>
                <Link to='/orders'><Button onClick={handleOrder}> Buy Now</Button></Link>
            </div>
        </div>
    );
};

export default Product;