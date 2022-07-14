import React from 'react';


const Doctor = ({ doctor, index, refetch, setDeleting }) => {
    const { name, img, specialization, email } = doctor;

    return (
        <tr>
            <th className='text-primary'>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialization}</td>
            <td>
                <label onClick={() => setDeleting(doctor)} htmlFor="delete-modal" className="btn modal- btn-error text-white">Remove doctor</label>
            </td>

        </tr>
    );
};

export default Doctor;