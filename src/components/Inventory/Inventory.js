import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';

const Inventory = () => {


    return (
        <div>
            <h1>this is inventory</h1>

            <Link to='/addProduct'>Add Product</Link>
            <br />
            <Link to='/manageProduct'>Manage Product</Link>

        </div>
    );
};

export default Inventory;