import './App.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import UserService from './components/Dashboard/UserService/UserService';
import PlaceService from './components/PlaceService/PlaceService';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Order from './components/Dashboard/Order/Order';
import Review from './components/Dashboard/Review/Review';
import NotFound from './components/NotFound/NotFound';
import MangeService from './components/Dashboard/ManageService/MangeService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    fetch(
        `https://immense-inlet-74207.herokuapp.com/admin?email=${loggedInUser.email}`
    )
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            if (data) {
                const newUser = { ...loggedInUser };
                newUser.setUser = true;
                setLoggedInUser(newUser);
            } else {
                const newUser = { ...loggedInUser };
                newUser.setUser = false;
                setLoggedInUser(newUser);
            }
        });
}, []);

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard ></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            {loggedInUser.setUser && <AddService></AddService>}
          </PrivateRoute>
          <PrivateRoute path="/placeService/:id">
            <PlaceService></PlaceService>
          </PrivateRoute>
          <Route path="/serviceListO">
            <UserService></UserService>
          </Route>
          <Route path="/serviceList">
            {loggedInUser.setUser && <ServiceList></ServiceList>}
          </Route>
          <Route path="/makeAdmin">
            {loggedInUser.setUser && <MakeAdmin></MakeAdmin>}
          </Route>
          <Route path="/manageService">
            {loggedInUser.setUser && <MangeService/>}
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
