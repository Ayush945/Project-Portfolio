import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <>
            <div className='flex justify-evenly bg-slate-200 pt-10 items-start pb-24'>
                <div>
                    <h1 className='font-bold text-xl mb-5'>CAR Rental</h1>
                    <p>We offers a big range of vehicles for</p>
                    <p> all your driving needs. We have </p>
                    <p>the perfect car to meet your needs.</p>
                    <p className='mt-5'><FontAwesomeIcon icon={faPhone} /> (+977)981-123-1341</p>
                    <p><FontAwesomeIcon icon={faEnvelope} className='text-red-500' /> carrental12@gmail.com</p>

                </div>
                <div>
                    <h1 className='font-bold text-xl mb-5'>COMPANY</h1>
                    <p>Kathmandu</p>
                    <p>Careers</p>
                    <p>Mobile</p>
                    <p>Blog</p>
                    <p>How we work</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl mb-5'>WORKING</h1>
                    <p>Mon - Fri: 9:00 Am - 9:00 PM</p>
                    <p>Sat - Sun: Closed</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl mb-5'>SUBSCRIPTION</h1>
                    <p>subscribe your Email address for</p>
                    <p>latest news and updates.</p>
                    <p>
                        <input
                            placeholder='Enter Email Address'
                            className='mt-5 w-full mb-3 p-2'
                        />

                        <button className='w-full px-4 py-2 bg-red-400 text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-blue-200'>Submit</button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer