import React from 'react';

const Expert = ({expert}) => {
     const {name, expities, experience, img} = expert;
     return (
          <div  className="col-lg-4 col-md-6 col-12">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <h3 className="text-danger">{expities}</h3>
                    <h5>{experience}</h5>
          </div>
     );
};

export default Expert;