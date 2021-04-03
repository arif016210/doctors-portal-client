import React from 'react';
import './BusinessInfo.css';
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {

    const infoData = [

        {

            title: "Opening Hours",
            description: "We are open 7 days",
            icon: <i className="fa fa-clock-o" aria-hidden="true"></i>,
            background: "primary"

        },
        {

            title: "Visit our location",
            description: "Brooklyn, NY 10003,USA",
            icon: <i className="fa fa-map-marker" aria-hidden="true"></i>,
            background: "dark"

        },
        {

            title: "Call us now",
            description: "+15465145345",
            icon: <i className="fa fa-phone" aria-hidden="true"></i>,
            background: "primary"

        }

    ]


    return (
        <section className="container">
            <div className="row">
                {
                    infoData.map(info => <InfoCard info={info} ></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;