import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';
import Product from '../Product/Product';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        displaySpinnerToggle(true);
        fetch('https://dorakata-shop.herokuapp.com/products')
            .then((response) => response.json())
            .then(data => {
                setProducts(data)
                displaySpinnerToggle(false);
            })

    }, [])

    const displaySpinnerToggle = (show) => {
        if (show) {
            document.getElementById('spinner').classList.remove('d-none');
        }
        else {
            document.getElementById('spinner').classList.add('d-none');
        }
    }


    return (
        <div className="row">
            <div id="spinner" class="d-flex justify-content-center d-none">
                <div class="spinner-border" role="status">

                </div>
            </div>
            {
                products.map((product) => <Product product={product}></Product>)
            }
        </div>

    );
};

export default Home;