import React from 'react'
import Cars from '../Images/cars.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Cross from '../Images/cross.png';
import Price from '../Images/price.png';
import Charge from '../Images/charge.png';
function Promo() {
    return (
        <>
            <div >
                <div className='bg-black text-white mt-32 p-10 text-center'>
                    <h1 className='text-6xl font-bold'>Save big with our cheap rental!</h1>
                    <p className='text-xl mt-5'>Top Airports. Local Suppliers.<span className='text-red-500'>24/7 </span>Support.</p>
                </div>
                <div className='flex justify-center'>
                    <img
                        src={Cars}
                        alt='Cars Pics'
                    />
                </div>
                <div className='flex justify-around'>
                    <div>
                        <h1 className='font-bold text-xl mb-5'>Why Choose Us</h1>
                        <p className='font-bold text-5xl'>Best valued deals you</p>
                        <p className='font-bold text-5xl mb-10'>will ever find</p>
                        <p>Discover the best deals you'll ever find with our unbeatable offers.</p>
                        <p> We're dedicated to providing you with the best value for your </p>
                        <p>money, so you can enjoy top-quality services and products without</p>
                        <p> breaking the bank. Our deals are designed to give you the ultimate</p>
                        <p> renting experience, so don't miss out on your chance to save big.</p>

                        <button className='bg-red-500 shadow-red-600 shadow-sm p-6 mt-5 text-white hover:shadow-red-600 hover:shadow-lg'
                        >
                            Find Details
                            <FontAwesomeIcon
                                icon={faAngleRight}
                            />
                        </button>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className='flex justify-center items-center'>
                            <div className='mr-4'>
                                <img
                                    src={Cross}
                                />
                            </div>
                            <div>
                                <h1 className='font-bold text-xl mb-3'>Cross Country Drive</h1>
                                <p>Take your driving experience to the next</p>
                                <p> level with our top-notch vehicles for your</p>
                                <p> cross-country adventures.</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <div className='mr-4'>
                                <img
                                    src={Price}
                                />
                            </div>
                            <div>
                                <h1 className=' font-bold text-xl mb-3'>All Inclusive Pricing</h1>
                                <p>Get everything you need in one convenient,</p>
                                <p> transparent price with our all-inclusive</p>
                                <p> pricing policy.</p>
                            </div>
                        </div>


                        <div className='flex justify-center items-center'>
                            <div className='mr-4'>
                                <img
                                    src={Charge}
                                />
                            </div>
                            <div>
                                <h1 className='font-bold text-xl mb-3'>No Hidden Charges</h1>
                                <p>Enjoy peace of mind with our no hidden</p>
                                <p> charges policy. We believe in transparent</p>
                                <p> and honest pricing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Promo