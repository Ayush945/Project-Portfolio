import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Client() {
    return (
        <>
            <div className=' bg-slate-100 pb-20'>
                <div className='text-center mt-20 mb-10 pt-12'>
                    <h1 className='font-semibold text-xl '>Reviewed by People</h1>
                    <h1 className='font-bold text-4xl'>Client's Testimonials</h1>
                    <p>Discover the positive impact we've made on the our clients by reading through their </p>
                    <p>testimonials. Our clients have experienced our service and results, and they're eager to share</p>
                    <p>their positive experiences with you.</p>
                </div>
                <div className='flex justify-evenly'>
                    <div className=' p-4 shadow-xl bg-white'>
                        <p>"We rented a car from this website and</p>
                        <p>had an amazing experience! The</p>
                        <p>booking was easy and the rental rates</p>
                        <p>were very affordable. "</p>
                        <p className='text-red-500 text-right mr-8 '><FontAwesomeIcon icon={faQuoteRight} /></p>
                    </div>
                    <div className=' p-4 shadow-xl bg-white'>
                        <p>"The car was in great condition and</p>
                        <p>and made our trip even better.</p>
                        <p>Highly recommend for this car</p>
                        <p>rental website!"</p>
                        <p className=' text-red-500 text-right mr-8 '><FontAwesomeIcon icon={faQuoteRight} /></p>
                        \
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client