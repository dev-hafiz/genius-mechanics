import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
     const {signInUsingGoogle} = useAuth()
     return (
          <div className="text-center">
               <h1>Plese Log-In</h1>
               
               <button onClick={signInUsingGoogle} className="btn btn-warning">Google Login</button>
          </div>
     );
};

export default Login;