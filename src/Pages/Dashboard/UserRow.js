import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://sheltered-beyond-95272.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }

                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    console.log(data)
                    toast.success(`Successfully Make an Admin`)
                }
            })
    }
    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='mx-2 btn btn-xs text-white '>Make Admin</button>}</td>
            <td><button className='mx-2 btn btn-xs text-white '>Remove User</button></td>

        </tr>
    );
};

export default UserRow;