import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-2xl text-primary font-semibold'>Welcome to Your dashboard {user.displayName}</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-68 bg-base-100 text-base-content">
                    <li className='text-primary'><Link to="/dashboard">My appointments</Link></li>
                    <li className='text-primary'><Link to="/dashboard/review">My review</Link></li>
                    {admin && <>
                        <li className='text-primary'><Link to="/dashboard/users">All users</Link></li>
                        <li className='text-primary'><Link to="/dashboard/addDoctor">Add a doctor</Link></li>
                        <li className='text-primary'><Link to="/dashboard/manageDoctor">ManageDoctor</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;