import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
  return (
    <div className=" col-md-4 col-sm-6 my-3 d-flex justify-content-center">
      <Link to={`/placeService/${service._id}`}>
        <div className="card card-style parent-animation">
          <img
            style={{ width: "150px", height: "100px" }}
            className="card-img-top tada align-self-center"
            src={`data:image/jpeg;base64,${service.image.img}`}
            alt=""
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">
              {service.title}
            </h5>
            <p className="card-text text-dark">{service.description}</p>
            <h5 className="text-light bg-secondary w-50" style={{ margin: "0 auto" }}>{service.price}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceDetails;