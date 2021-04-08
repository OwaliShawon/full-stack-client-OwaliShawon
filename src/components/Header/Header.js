import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import logo from '../../logo.png'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser.isSignedIn);

    let AuthButton;

    return (
        <div className="header">
            <Link to='/'><img src={logo} alt="" /></Link>

            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/deals">Deals</Link>

                {
                    loggedInUser.isSignedIn ? AuthButton = <button onClick={() => setLoggedInUser({})}>Logout</button>
                        : AuthButton = <Link to="/login">Login</Link>

                }

                <br />

                <Link>{loggedInUser.name}</Link>
            </nav>
        </div>
    );
};

export default Header;