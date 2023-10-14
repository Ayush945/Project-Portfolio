import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Faq() {
    return (
        <>
            <div className='pt-20'>
                <div className='text-center'>
                    <h1 className='font-bold text-xl'>FAQ</h1>
                    <h1 className='font-bold text-3xl mt-3'>Frequently Asked Questions</h1>
                    <h1 className='mt-5'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to</h1>
                    <h1>Common Concerns and Inquiries.</h1>
                </div>
                <div className=''>
                    <div className='flex flex-col shadow-xl border-2 items-center p-4 mr-56 ml-56 mb-10 mt-10'>
                        <div className='flex shadow-sm w-full justify-between p-4'>
                            <p>1. What is special about rental car deals? </p>
                            <p><FontAwesomeIcon icon={faAngleDown} /></p>
                        </div>
                        <div className='flex shadow-sm w-full justify-between p-4'>
                            <p>2. How do I find such low rental car prices? </p>
                            <p><FontAwesomeIcon icon={faAngleDown} /></p>
                        </div>
                        <div className='flex shadow-sm w-full justify-between p-4'>
                            <p>3. How do I find the car rental deals? </p>
                            <p><FontAwesomeIcon icon={faAngleDown} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq