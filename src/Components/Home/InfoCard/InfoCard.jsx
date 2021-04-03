import React from 'react';
import './InfoCard.css';

const InfoCard = ({ info }) => {

    const { title, description, icon, background } = info;

    return (

        <div className="col-md-4">
            <div className={`d-flex justify-content-center info-container info-${background} `} >
                <div className="info-icon">
                    {icon}
                </div>
                <div className="info-content">
                    <h6> {title} </h6>
                    <small> {description} </small>
                </div>
            </div>
        </div>

    );
};

export default InfoCard;