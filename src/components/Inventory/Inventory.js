import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {


    return (
        <div className='App'>
            <h2>Admin Panal For Inventory</h2>
            <Link to='/addProduct'>Add Product</Link>
            <br />
            <Link to='/manageProduct'>Manage Product</Link>

        </div>
    );
};

export default Inventory;