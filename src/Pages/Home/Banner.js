import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryBtn from '../Shared/PrimaryBtn';
import background from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
            className="hero min-h-screen p-12 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>

                </div>
            </div>
        </div>
    );
};

export default Banner;