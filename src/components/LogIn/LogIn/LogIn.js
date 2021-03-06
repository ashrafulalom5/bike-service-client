import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './LogIn.css';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import googleIcon from '../../../images/google.png' ;

const LogIn = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var { displayName, email, photoURL } = result.user;
                const signInUser = { name: displayName, email, photo: photoURL };
                setLoggedInUser(signInUser);
                // localStorage.setItem('user', JSON.stringify(signInUser));
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    return (
        <div >
            <Link to="" style={{ textAlign: 'center', color: 'black'}} className="navbar-brand d-sm-block mt-5 pt-5" href="#"><img style={{ width: '50px' }} src={logo} alt="" /> Bike Services</Link>
            <div>
                <div className="gButton">
                    <img style={{ width: "25px" }} className="ms-3" src={googleIcon} alt="" />
                    <button className="googleButton text-dark" onClick={handleGoogleSignIn}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;