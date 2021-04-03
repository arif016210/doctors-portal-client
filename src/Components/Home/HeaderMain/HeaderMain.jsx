import React from 'react';
import img1 from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <div className="container-fluid">
            <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>Your New Smile <br /> Starts Here </h1>
                    <p className="text-secondary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe cum corporis sint, earum laudantium.</p>
                    <button className="btn btn-primary">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6">
                    <img src={img1} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;