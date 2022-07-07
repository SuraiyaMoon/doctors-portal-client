import React from 'react';

const Review = (props) => {
    const { img, name, review, country } = props.review;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='mb-2'>{review}</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3 ">
                            <img src={img} />
                        </div>
                    </div>

                    <div>
                        <h2 className='text-2xl'>{name}</h2>
                        <p>{country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;