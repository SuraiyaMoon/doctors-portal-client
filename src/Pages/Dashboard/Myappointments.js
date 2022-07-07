import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Myappointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://sheltered-beyond-95272.herokuapp.com/booking?patientEmail=${user?.email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem('accessToken')
                        signOut(auth)
                        navigate('/')


                    }

                    return res.json()
                })
                .then(data => {



                    setAppointments(data)
                })
        }
    }, [user])
    return (
        <div>
            <h3>Appointments {appointments.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments.map((a, index) =>

                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.treatment}</td>
                                    <td>{a.date}</td>
                                    <td>{a.time}</td>
                                    {/* <button className='mx-2 btn btn-primary text-white '>Delete appointment</button> */}

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myappointments;