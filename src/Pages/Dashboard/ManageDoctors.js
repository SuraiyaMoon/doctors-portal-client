import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import Doctor from './Doctor';

const ManageDoctors = () => {
    const [deleting, setDeleting] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <Doctor
                                key={index}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeleting={setDeleting}
                            ></Doctor>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deleting && <ConfirmDeleteModal
                    deleting={deleting}
                    refetch={refetch}
                    setDeleting={setDeleting}
                ></ConfirmDeleteModal>
            }

        </div>
    );
};

export default ManageDoctors;