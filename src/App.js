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


function App() {
  return (
    <div className="App">
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
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Inventory />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
