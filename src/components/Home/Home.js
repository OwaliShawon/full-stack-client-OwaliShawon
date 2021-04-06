import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';
import Product from '../Product/Product';
// import jQuery from 'jquery'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then(data => setProducts(data))
    }, [])

    // console.log(products);

    return (
        <div>
            {
                products.map((product) => <Product product={product}></Product>)
            }
        </div>

    );
};

export default Home;