import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Notfound from './Pages/Shared/Notfound';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';

import MyReview from './Pages/Dashboard/MyReview';
import Myappointments from './Pages/Dashboard/Myappointments';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';





function App() {
  return (
    <div className='max-w-7xl mx-auto '>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }>
        </Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<Myappointments />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }></Route>
          <Route path='addDoctor' element={
            <RequireAdmin>
              <AddDoctor />
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctor' element={
            <RequireAdmin>
              <ManageDoctors />
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
