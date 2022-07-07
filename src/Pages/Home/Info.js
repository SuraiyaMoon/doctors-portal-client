import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCart cardTittle={"Opening Hours"} img={clock} bgClass={'bg-gradient-to-r from-secondary to-primary'}></InfoCart>
            <InfoCart cardTittle={"Our Location"} img={marker} bgClass={"bg-accent"} ></InfoCart>
            <InfoCart cardTittle={"Contact Us"} img={phone} bgClass={'bg-gradient-to-r from-secondary to-primary'}></InfoCart>

        </div >
    );
};

export default Info;