import React from 'react';
import FirstComponent from '../components/FirstComponent';
import Navbar from '../components/Navbar';
import Booking from '../components/Booking';
import ContactInfo from '../components/ContactInfo';
import VehicleModel from '../components/VehicleModel';
import Promo from '../components/Promo';
import Faq from '../components/Faq';
import Client from '../components/Client';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <div>
            <Navbar />
            <FirstComponent />
            <Booking />
            <ContactInfo />
            <VehicleModel />
            <Promo />
            <Client />
            <Faq />
            <Footer />
        </div>
    );
}

export default Homepage;
