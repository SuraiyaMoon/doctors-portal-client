import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Connected = () => {
    return (
        <div style={{
            background: `url(${appointment})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
        }}
            className='my-28 p-8 flex justify-center'>
            <div className=''>
                <h2 className='text-center text-primary font-bold text-2xl'>Contact Us</h2>
                <h2 className='text-3xl text-center text-white'>Stay Connected With us</h2>
                <div className='my-4 '>
                    <div>
                        <input type="text" placeholder="Write your email address" className="input w-full" /> <br />
                        <input type="text" placeholder="Subject" className="input w-full my-4" /> <br />
                        <input type="text" placeholder="Your message" className="input h-24 w-full mb-4" /> <br />

                        <PrimaryBtn >Submit</PrimaryBtn>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Connected;