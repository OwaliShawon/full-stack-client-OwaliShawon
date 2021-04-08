import React, { useEffect, useState } from 'react';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dorakata-shop.herokuapp.com/products')
            .then((response) => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div>
                {
                    products.map((product) => <DeleteProduct product={product}></DeleteProduct>)
                }
            </div>


        </div>
    );
};

export default ManageProduct;