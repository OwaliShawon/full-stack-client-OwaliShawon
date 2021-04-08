import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';
import Order from './components/Order/Order';
import Orders from './components/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div>
        <Router>
          <div>
            <Header></Header>
            <hr />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>

              <PrivateRoute path="/orders">
                <Orders />
              </PrivateRoute>
              <PrivateRoute path="/order">
                <Order />
              </PrivateRoute>


              <PrivateRoute path="/admin">
                <Inventory />
              </PrivateRoute>
              <Route path="/inventory">
                <Inventory />
              </Route>
              <Route path="/addProduct">
                <AddProduct />
              </Route>
              <Route path="/manageProduct">
                <ManageProduct />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;
