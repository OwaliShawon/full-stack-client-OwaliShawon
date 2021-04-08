import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const DeleteProduct = (props) => {
    const { name, weight, price, imageUrl, _id } = props.product;

    const deleteHandlerProduct = id => {
        console.log(id);
        fetch('https://dorakata-shop.herokuapp.com/deleteProduct/' + id, {
            method: 'DELETE',
        })
            .then(() => { console.log('remove') })

    }

    return (
        <div className='App'>
            <h4>{name}</h4>
            <h5>Weight: {weight}</h5>
            <h5>Price: {price}</h5>
            <Button onClick={() => deleteHandlerProduct(_id)}>Delete</Button>
            <hr />
        </div>
    );
};

export default DeleteProduct;