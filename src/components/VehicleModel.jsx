import React, { useState } from 'react';
import suv from '../Images/SUV.png';
import sedan from '../Images/Sedan.png';
import convertible from '../Images/Convertible.png';

function VehicleModel() {
    const [selectedCar, setSelectedCar] = useState('suv');
    const [activeButton, setActiveButton] = useState('suv');

    const carImage = {
        suv,
        sedan,
        convertible,
    };

    const carData = {
        suv: { rent: '45', model: "A2", mark: 'Toyota', year: '2006', doors: '4', ac: 'yes', transmission: 'manual', fuel: 'diesel' },
        sedan: { rent: '65', model: "S62R", mark: 'Mercedes', year: '2016', doors: '4', ac: 'yes', transmission: 'auto', fuel: 'diesel' },
        convertible: { rent: '35', model: "IO123", mark: 'Mercedes', year: '2010', doors: '2', ac: 'yes', transmission: 'manual', fuel: 'diesel' }
    }

    const showCar = (carType) => {
        setSelectedCar(carType);
        setActiveButton(carType);
    };

    const getButtonClass = (carType) => {
        return activeButton === carType
            ? 'bg-red-500 text-white'
            : 'bg-gray-300';
    };

    const carTypeData = carData[selectedCar];

    return (
        <>
            <div className='text-center mt-20 font-semibold text-xl'>Vehicle Models</div>
            <div className='text-center font-bold text-5xl mt-5 mb-5'>Our rental fleet</div>
            <p className='text-center'>Choose from a variety of our amazing vehicles to rent for your next</p>
            <p className='text-center mb-10'>adventure or business trip</p>

            <div className='flex justify-evenly items-center'>
                <div className='flex flex-col font-semibold'>
                    <button
                        className={`p-4 mb-2 w-72 text-3xl transition-all duration-500 ${getButtonClass('suv')}`}
                        onClick={() => showCar('suv')}
                    >
                        SUV
                    </button>
                    <button
                        className={`mb-2 p-4 text-3xl transition-all duration-500 ${getButtonClass('sedan')}`}
                        onClick={() => showCar('sedan')}
                    >
                        Sedan
                    </button>
                    <button
                        className={`p-4 text-3xl transition-all duration-500 ${getButtonClass('convertible')}`}
                        onClick={() => showCar('convertible')}
                    >
                        Convertible
                    </button>
                </div>

                <div className='flex gap-44'>
                    {selectedCar && (
                        <>
                            <img
                                src={carImage[selectedCar]}
                                alt={selectedCar}
                                className='w-72 h-72 transition-all duration-500'
                            />

                            <div className='flex flex-col items-center gap-2 justify-center'>
                                <p className='text-xl font-semibold bg-red-500 text-white p-4'>{carTypeData.rent} / rent per day</p>


                                <div className='flex justify-between items-center w-full'>
                                    <p className='text-gray-600'>Model</p>

                                    <p className='font-semibold'> {carTypeData.model}</p>
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <span className='text-gray-600'>Mark</span>

                                    <span className='font-semibold'>{carTypeData.mark}</span>
                                </div>

                                <div className='flex justify-between items-center w-full'>
                                    <span className='text-gray-600'>Year</span>

                                    <span className='font-semibold'>{carTypeData.year}</span>
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <span className='text-gray-600'>Doors</span>

                                    <span className='font-semibold'>{carTypeData.doors}</span>
                                </div>

                                <div className='flex justify-between items-center w-full'>
                                    <span className='text-gray-600'>AC</span>

                                    <span className='font-semibold'>{carTypeData.ac}</span>
                                </div>

                                <div className='flex justify-between items-center w-full'>
                                    <span className='text-gray-600'>Transmission</span>

                                    <span className='font-semibold'>{carTypeData.transmission}</span>
                                </div>

                                <div className='flex justify-between items-center w-full'>
                                    <span className='text-gray-600'>Fuel</span>

                                    <span className='font-semibold'>{carTypeData.fuel}</span>

                                </div>

                                <button className='bg-red-400 text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-blue-200 w-full'>
                                    Reserve Now
                                </button>
                            </div>


                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default VehicleModel;
