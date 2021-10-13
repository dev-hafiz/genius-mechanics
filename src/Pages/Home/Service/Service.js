import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const service = ({service}) => {
     const {id, name, price, time, img, descripton} = service ;
     return (
          <div className="service-card pb-3">
          <img src={img} alt="" />
               <h2>{name}</h2>
               <h3>Price : $ {price}</h3>
               <h4>Hours :{time}</h4>
               <p className="px-4">{descripton}</p>

              <Link to={`/service/${id}`}>
              <button className="btn btn-danger">Book {name.toLowerCase()}</button>
              </Link>
          </div>
     );
};

export default service;