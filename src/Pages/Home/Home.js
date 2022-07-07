import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Term from "./Term";
import MakeAppointment from "./MakeAppointment";
import Testimonials from './Testimonials';
import Footer from '../Shared/Footer';
import Connected from './Connected';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Term></Term>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Connected></Connected>
            <Footer></Footer>

        </div>
    );
};

export default Home;