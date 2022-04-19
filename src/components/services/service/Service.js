import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { serviceName, img, price, serviceDetails } = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>Name : {serviceName}</h1>
            <h3> @ {price} Taka</h3>
            <h5>Service Detail: {serviceDetails}</h5>
            <Link to="/checkout">
                <button className='orderButton'> Order Now</button>
            </Link>

        </div>
    );
};

export default Service;