import React from 'react';
import { toast } from 'react-toastify';


const ConfirmDeleteModal = ({ deleting, refetch, setDeleting }) => {
    const { name, email } = deleting;

    const deleteDoctor = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} is Deleted`);
                    setDeleting(null)
                    refetch()
                }
                console.log(data)
            })

    }
    return (
        <div>

            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-red-500">Are you sure you want to delete ${name}!?</h3>
                    <p className="py-4">You've been selected For a chance to get one year of subscription to use Wikipedia For free!</p>
                    <div className="modal-action">
                        <button onClick={() => deleteDoctor()} className='mx-2 btn btn-xs  '>Delete</button>
                        <label htmlFor="delete-modal" className="btn btn-xs ">Cancel!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;