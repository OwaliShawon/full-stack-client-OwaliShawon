import React from 'react';
import { useHistory } from 'react-router';

const DeleteProduct = (props) => {
    const { name, weight, price, imageUrl, _id } = props.product;

    const deleteHandlerProduct = id => {
        console.log(id);
        fetch('http://localhost:5000/deleteProduct/' + id, {
            method: 'DELETE',
        })
            .then(() => { console.log('remove') })

    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{weight}</h1>
            <h1>{price}</h1>
            <h1>{_id}</h1>
            <button onClick={() => deleteHandlerProduct(_id)}>Delete</button>
        </div>
    );
};

export default DeleteProduct;