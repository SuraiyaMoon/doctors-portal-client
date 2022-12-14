import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51LLgWFKvV1yc3oCUWlQFmaMWW1G2JeY1yFcrKPCCPpt0krNXMLFg75ydAM8oMuM7VlWB2xbwDgTSEilCC4BAcBLw005IkmPGrY');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md  bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success'>Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Pay for <span className='text-secondary'>{appointment.treatment}</span></h2>
                    <p>We will see you on <span className='
                        text-red-800'>{appointment.date} at {appointment.time}</span></p>
                    <div className="card-actions justify-end">
                        <p>Please pay: ${appointment.price}</p>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;