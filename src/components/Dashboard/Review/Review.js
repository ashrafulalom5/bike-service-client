import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { loggedInUser } = useContext(UserContext)
    const [review, setReview] = useState({});


    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }



    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('file', file);
        formData.append('newFile', loggedInUser.photo);
        formData.append('name', loggedInUser.name);
        formData.append('designation', review.designation);
        formData.append('description', review.description);
        fetch('https://immense-inlet-74207.herokuapp.com/review', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert("Review data has been send")
            })

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h4 className="my-5">Order Review</h4>
                    <form action="" onSubmit={handleReviewSubmit}>
                        {loggedInUser.name && <input onBlur={handleBlur} type="text" placeholder="Your name" className="form-control" value={loggedInUser.name} name="name" />}
                        <br />
                        <input onBlur={handleBlur} type="text" placeholder="Company’s name, Your Designation" className="form-control" name="designation" />
                        <br />
                        <input onBlur={handleBlur} type="text" placeholder="Description" className="form-control" name="description" />
                        <br />
   

                        <button type="submit" className="btn-black mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;