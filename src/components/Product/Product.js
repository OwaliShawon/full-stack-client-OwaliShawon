import React from 'react';
import { Button, Col } from 'react-bootstrap';


const Product = (props) => {
    const { name, weight, price, imageUrl } = props.product;
    // console.log(product);
    return (

        <div className='col-md-3'>
            <img src={imageUrl} style={{ height: '300px' }}></img>
            <h3>{name}</h3>
            <div>
                <h1>${price}</h1>
                <Button>Buy Now</Button>
            </div>
        </div>

    );
};

export default Product;