import React, { useState } from 'react';
import { faCalendarCheck, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Booking() {
    const [selectedCarType, setSelectedCarType] = useState('');
    const [selectedPickupLocation, setSelectedPickupLocation] = useState('');
    const [selectedDropoffLocation, setSelectedDropoffLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');

    const handleCarTypeChange = (e) => {
        setSelectedCarType(e.target.value);
    }

    const handlePickupLocationChange = (e) => {
        setSelectedPickupLocation(e.target.value);
    }

    const handleDropoffLocationChange = (e) => {
        setSelectedDropoffLocation(e.target.value);
    }

    const handlePickupDateChange = (e) => {
        setPickupDate(e.target.value);
    }

    const handleDropoffDateChange = (e) => {
        setDropoffDate(e.target.value);
    }

    return (
        <div className='mt-0 bg-slate-200 pb-12 pt-12'>
            <div className="flex flex-col justify-between border-2 shadow-md p-10 ml-32 mr-32 bg-white">
                <h1 className='font-semibold mb-6 text-xl'>Book a car</h1>
                <div className="mb-4 flex justify-between space-x-4">
                    <div className="w-1/3">
                        <label htmlFor="carType" className="text-sm">
                            Select a car type <span className='text-red-700'>*</span>
                        </label>
                        <select
                            id="carType"
                            className="block w-full h-[2rem] border border-gray-300  shadow-sm focus:ring focus:ring-blue-200"
                            value={selectedCarType}
                            onChange={handleCarTypeChange}
                        >
                            <option value="">Select a car type</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Convertible">Convertible</option>
                        </select>
                    </div>
                    <div className="w-1/3">
                        <label htmlFor="pickupLocation" className="text-sm">
                            <FontAwesomeIcon icon={faMapPin} /> Pick-off Location <span className='text-red-700'>*</span>
                        </label>
                        <select
                            id="pickupLocation"
                            className="block w-full h-[2rem] border border-gray-300  shadow-sm focus:ring focus:ring-blue-200"
                            value={selectedPickupLocation}
                            onChange={handlePickupLocationChange}
                        >
                            <option value="">Select a location</option>
                            <option value="Location 1">Location 1</option>
                            <option value="Location 2">Location 2</option>
                            {/* Add more pickup locations as needed */}
                        </select>
                    </div>
                    <div className="w-1/3">
                        <label htmlFor="dropoffLocation" className="text-sm">
                            <FontAwesomeIcon icon={faMapPin} /> Drop-off Location <span className='text-red-700'>*</span>
                        </label>
                        <select
                            id="dropoffLocation"
                            className="block w-full h-[2rem] border border-gray-300  shadow-sm focus:ring focus:ring-blue-200"
                            value={selectedDropoffLocation}
                            onChange={handleDropoffLocationChange}
                        >
                            <option value="">Select a location</option>
                            <option value="Location A">Location A</option>
                            <option value="Location B">Location B</option>
                            {/* Add more drop-off locations as needed */}
                        </select>
                    </div>
                </div>
                <div className="mb-4 flex justify-between space-x-4">
                    <div className="w-1/3">
                        <label htmlFor="pickupDate" className="text-sm">
                            <FontAwesomeIcon icon={faCalendarCheck} /> Pick-off Date <span className='text-red-700'>*</span>
                        </label>
                        <input
                            id="pickupDate"
                            type="date"
                            className="block w-full h-[2rem] border border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                            value={pickupDate}
                            onChange={handlePickupDateChange}
                        />
                    </div>
                    <div className="w-1/3">
                        <label htmlFor="dropoffDate" className="text-sm">
                            <FontAwesomeIcon icon={faCalendarCheck} /> Drop-off Date <span className='text-red-700'>*</span>
                        </label>
                        <input
                            id="dropoffDate"
                            type="date"
                            className="block w-full h-[2rem] border border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                            value={dropoffDate}
                            onChange={handleDropoffDateChange}
                        />
                    </div>
                    <div className="w-1/3 flex items-end">
                        <button className="w-full px-4 py-2 bg-red-400 text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-blue-200">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className=' text-center mt-20'>
                <h1 className=' font-semibold text-2xl'>Plan your trip now</h1>
                <h1 className=' font-bold text-5xl mt-4'>Quick & easy car rental</h1>
            </div>
        </div>
    );
}

export default Booking;
