import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { _id, name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 drop-shadow-lg

        ">
            <div className="card-body text-center">
                <h2 className="text-xl  text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No slot available</span>
                    }

                </p>
                <p>{slots.length} Available {slots.length > 1 ? 'spaces' : 'space'}</p>
                <label
                    disabled={slots.length === 0}
                    onClick={() => setTreatment(service)}
                    htmlFor="booking-modal"
                    className="btn modal-button btn-secondary text-white">Book Appointment</label>

            </div>
        </div>
    );
};

export default Service;