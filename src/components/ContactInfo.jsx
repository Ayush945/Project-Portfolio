import React from 'react'
import SelectCar from '../Images/carinfo.png';
import ContactOperator from '../Images/contacboi.png';
import Drive from '../Images/contactinfo.png';
function ContactInfo() {
    return (
        <>
            <div className='flex justify-center gap-32 items-center text-center pt-10'>
                <div className='flex flex-col items-center'>

                    <img
                        src={SelectCar}
                        alt='car'
                    />
                    <h1 className='font-bold text-center'>Select Car</h1>
                    <p>We offers a big range of vehicles for all</p>
                    <p>your driving needs. We have the</p>
                    <p>perfect car to meet your needs</p>
                </div>

                <div className='flex flex-col items-center'>
                    <img
                        src={ContactOperator}
                        alt='Contact Operator'
                    />
                    <h1 className='font-bold'>Contact Operator</h1>
                    <p>Our knowledgeable and friendly</p>
                    <p> operators are always ready to help</p>
                    <p> with any questions or concerns</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img
                        src={Drive}
                        alt='Lets Drive'
                    />
                    <h1 className='font-bold'>Let's Drive</h1>
                    <p>Whether you're hitting the open road,</p>
                    <p> we've got you covered with our wide</p>
                    <p> range of cars</p>
                </div>
            </div>
        </>
    )
}

export default ContactInfo