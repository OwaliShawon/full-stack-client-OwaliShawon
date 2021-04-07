import React from 'react';

const DeleteProduct = (props) => {
    const { name, weight, price, imageUrl, _id } = props.product;

    const deleteHandlerProduct = id => {
        console.log(id);
        fetch('http://localhost:5000/deleteProduct/' + id, {
            method: 'DELETE',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(id)
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