import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div className="col-md-4 text-center ">
            <img style={{ height: '60px' }} src={service.img} alt="" />
            <h5 className="mt-4 mb-4" > {service.name} </h5>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum doloribus saepe esse, id ipsum? </p>
        </div>
    );
};

export default ServicesCard;