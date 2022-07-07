import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Term = () => {
    return (
        <div className="hero min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='p-6'>
                    <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms
                        !</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem  that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Term;