import React from 'react'
import CarPic from '../Images/Toyota.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
function FirstComponent() {
    return (
        <>
            <div className='flex justify-evenly items-center min-h-screen'>
                <div >
                    <div className='font-bold'>
                        <p className='text-4xl'>Plan your trip now</p>
                        <p className='text-7xl mt-2'>Save <span className='text-red-500'>big</span> with our</p>
                        <p className='text-4xl'>car rental</p>
                    </div>
                    <div className='mt-5 text-xl'>
                        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles,</p>
                        <p>flexible pick-up options and much more.</p>
                    </div>
                    <div className='flex gap-7 mt-10'>
                        <button className='bg-red-500 shadow-red-600 shadow-sm p-6 text-white hover:shadow-red-600 hover:shadow-lg '>Book Ride <FontAwesomeIcon icon={faCheck} /></button>
                        <button className=' bg-black p-6 text-white hover:bg-white hover:text-black hover:border-black hover:border-2'>Learn More <FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </div>
                <div>
                    <img
                        src={CarPic}
                        alt='car pic'
                        className=' w-[700px] h-[400px]'
                    />
                </div>
            </div>
        </>
    )
}

export default FirstComponent