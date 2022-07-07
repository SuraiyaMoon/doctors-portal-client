import React from 'react';
import Service from './Service';
import floride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: floride
        },
        {
            _id: 4,
            name: "Cavity Feeling",
            description: "",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: whitening
        }
    ]
    return (
        <div className='my-12 px-12'>
            <div className='text-center'>
                <h3 className='text-primary text-2xl font-bold uppercase'>Our Services</h3>
                <h2 className=''>Services We Provide</h2>
                <div className=' grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-10 '>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;