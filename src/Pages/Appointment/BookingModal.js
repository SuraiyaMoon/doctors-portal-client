import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';




const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date, 'PP')

    const { _id, name, slots } = treatment;
    const handleBooking = e => {

        const booking = {
            date: formattedDate,
            treatment: name,
            time: e.target.slot.value,
            treatmentId: _id,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }

        //send booking data from client side to server side

        fetch('https://sheltered-beyond-95272.herokuapp.com/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set on ${formattedDate} at ${booking.time}`)
                }
                else {
                    toast.error(`You already have an ${data.booking?.date} at ${data.booking?.time}`)
                    console.log()
                }
                refetch()
                setTreatment(null)

            })




        // console.log(booking)
        e.preventDefault()

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center mb-4">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center' >

                        <input type="text" readOnly
                            value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >

                                    {slot}</option>)
                            }
                        </select>
                        <input readOnly type="text"

                            value={user?.displayName || ''}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="email"
                            readOnly
                            value={user?.email || ''}
                            placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text"
                            name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit"
                            value="Submit" placeholder="Type here" className="btn btn-secondary text-white w-full max-w-xs " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;