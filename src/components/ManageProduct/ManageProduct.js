import React, { useEffect, useState } from 'react';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>Manage Product</h1>
            <div>
                {
                    products.map((product) => <DeleteProduct product={product}></DeleteProduct>)
                }
            </div>


        </div>
    );
};

export default ManageProduct;