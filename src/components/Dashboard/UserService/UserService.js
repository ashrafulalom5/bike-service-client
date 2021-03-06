import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ParticularUser from '../ParticularUser/ParticularUser';


const UserService = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [particularUser, setParticularUser] = useState([])
    useEffect(() => {
        fetch("https://immense-inlet-74207.herokuapp.com/seeParticularService?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setParticularUser(data)
            })
    }, [loggedInUser.email])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <div className="d-flex justify-content-around">
                        <h2>Order</h2>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                    <div className="row">
                        {
                            particularUser.map(user => <ParticularUser key={user._id} particularUser={user}></ParticularUser>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserService;