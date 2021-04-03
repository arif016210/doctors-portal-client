import React from 'react';
import './Services.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/teeth.png';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {

    const serviceData = [

        {
            name: 'Fluoride Treatment',
            img: fluoride,

        },
        {
            name: 'Cavity Filling',
            img: cavity,

        },
        {
            name: 'Teeth Whitening',
            img: teeth,

        },

    ]


    return (

        <section className="services-container mt-4" >
            <div className="text-center">
                <h5>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5" >
                    {
                        serviceData.map(service => <ServicesCard service={service} ></ServicesCard>)
                    }
                </div>
            </div>

        </section>

    );
};

export default Services;