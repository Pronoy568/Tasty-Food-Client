import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
import logo from './Image/logo.jpg';

export const UserContest = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContest.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <div>
            <nav class="nav nav-pills flex-column flex-sm-row">
              <ul class="flex">
                <div class="logo">
                  <img src={logo} />
                </div>
                <li class="link color">
                  <Link class="flex-sm-fill text-sm-center nav-link color" aria-current="page"  to="/">Home</Link>
                </li>
                <li class="link color">
                  <Link class="flex-sm-fill text-sm-center nav-link color"  to="/admin">Admin</Link>
                </li>
                <li class="link color">
                  <Link class="flex-sm-fill text-sm-center nav-link color"  to="/deals">Deals</Link>
                </li>
                <li class="link color">
                  <Link class="flex-sm-fill text-sm-center nav-link color" to="/checkOut/SelectFoodName">Checkout</Link>
                </li>
                <li class="link color">
                  <Link class="flex-sm-fill text-sm-center nav-link color"  to="/login">Login</Link>
                </li>
                <div class="info">
                  <img src={loggedInUser.photoURL} />
                </div>
                <p class="name">{loggedInUser.displayName}</p>
              </ul>
            </nav>
        
    
          <Switch>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/deals">
              <Deals />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkOut/:name/:price">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/Orders">
              <Orders/>
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContest.Provider>
  );
}

export default App;
