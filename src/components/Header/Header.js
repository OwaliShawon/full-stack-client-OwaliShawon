import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            {/* <img src={logo} alt=""/> */}
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/deals">Deals</Link>
                <Link to="/login">Login</Link>

                {/* <button onClick={() => setLoggedInUser({})}>Sign out</button> */}
            </nav>
        </div>
    );
};

export default Header;