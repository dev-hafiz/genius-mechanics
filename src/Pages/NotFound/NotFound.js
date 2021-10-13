import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../images/404.png';

const NotFound = () => {
     return (
          <div>
               <img src={Error} alt="" />
               <br />
               <Link to="/home"> <button>Go home</button></Link>
          </div>
     );
};

export default NotFound;