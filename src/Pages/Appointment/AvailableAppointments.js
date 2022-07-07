import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'


const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`https://sheltered-beyond-95272.herokuapp.com/availableBookings?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-16'>
            <h1 className='text-center mb-4 text-secondary text-xl'>Available Appointment on {format(date, 'PP')}</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 px-12'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointments;