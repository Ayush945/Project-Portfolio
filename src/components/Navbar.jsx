import React from 'react'
import carlogo from '../Images/CarLogo.png';
function Navbar() {
    return (
        <>
            <div className=' flex justify-around items-center cursor-pointer'>
                <div className='flex items-center' >
                    <img
                        src={carlogo}
                        alt='logo'
                        className=''
                    />
                    <div className='flex flex-col text-red-500'>
                        <div className='text-3xl font-bold'>CAR</div>
                        <div className='text-2xl w-12' > Rental</div>
                    </div>
                </div>

                <div className='flex gap-5 font-semibold '>
                    <p className='hover:text-red-500' >Home</p>
                    <p className='hover:text-red-500'>About</p>
                    <p className='hover:text-red-500'>Vehicle Models</p>
                    <p className='hover:text-red-500'>Testimonials</p>
                    <p className='hover:text-red-500'>Our Team</p>
                    <p className='hover:text-red-500'>Contact</p>
                </div>
                <div className='flex gap-5 font-semibold items-center '>
                    <p className='hover:text-red-500'>Sign In</p>
                    <p className=' bg-red-500 p-2 text-white hover:shadow-red-700 hover:shadow-lg'>Register</p>
                </div>
            </div>
        </>
    )
}

export default Navbar