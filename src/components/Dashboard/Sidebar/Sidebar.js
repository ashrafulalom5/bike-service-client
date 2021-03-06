import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetch(
      `https://immense-inlet-74207.herokuapp.com/admin?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <div>
      <Link to="/">
        <div className="text-center mt-5">
          <img
            style={{ height: "50px" }}
            src={logo}
            className="img-fluid"
            alt=""
          />
        </div>
      </Link>

      <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
        <ul className="list-unstyled">
          {loggedInUser.setUser ? (
            <div className="my-5">
              <li className="li-style">
                <Link to="/serviceList">Order List</Link>
              </li>
              <li className="li-style">
                <Link to="/addService">Add Service</Link>
              </li>
              <li className="li-style">
                <Link to="/makeAdmin">Make Admin</Link>
              </li>
              <li className="li-style">
                <Link to="/manageService">Manage Service</Link>
              </li>
            </div>
          ) : (
            <div>
              <li className="li-style">
                <Link to="/placeService/6080006ebad77f2fbc19fbf8">Order</Link>
              </li>
              <li className="li-style">
                <Link to="/serviceListO">Service list user</Link>
              </li>
              <li className="li-style">
                <Link to="/review">Review</Link>
              </li>
            </div>
          )}
        </ul>
        <div>
          <Link to="/" className="btn-black">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
