import React, { useContext } from 'react';
import logo from '../../../images/logo.png';
import bike1 from '../../../images/bajaj.png';
import bike2 from '../../../images/bmw.png';
import bike3 from '../../../images/Ducati.png';
import bike4 from '../../../images/Suzuki.png';
import bike5 from '../../../images/yamaha.png';
import bike6 from '../../../images/zongshen.png';
import banner from '../../../images/banner.png'
import './Header.css';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    return (
        <header>
            <div className="header pb-4">
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-light row ms-auto">
                        <div className="col-md-4">
                            <Link className="navbar-brand d-sm-block" href="#"><img style={{ width: '50px' }} src={logo} alt="" /> Bike Service
                            </Link>
                            <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>


                        <div className="col-md-8">
                            <div className="  d-sm-flex justify-content-end" id="">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item active">
                                        <Link className="nav-link fw-bold" to="">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="dashboard">User</Link>
                                    </li>
                                    {loggedInUser.name ? <h5 className="p-2">{loggedInUser.name}</h5> : <Link to="/login"><button className="btn-color ml-3">LogIn</button></Link>}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <h1>BIKE REPAIR &#38; SUPPORT</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis similique nesciunt eos asperiores dolores?</p>
                            <button className="btn-color">Need US</button>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img className="img-fluid" src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row d-flex align-self-center" style={{ filter: "grayscale(100%)" }}>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "70px", width: "140px" }} src={bike1} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "70px", width: "140px" }} src={bike2} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "70px", width: "140px" }} src={bike3} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "70px", width: "140px" }} src={bike4} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "70px", width: "140px" }} src={bike5} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "70px", width: "140px" }} src={bike6} alt="" className="img-fluid" /></div>
                </div>
            </div>
        </header>
    );
};

export default Header;