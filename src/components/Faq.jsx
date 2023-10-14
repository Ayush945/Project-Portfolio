import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Faq() {
    const [faqs, setFaqs] = useState([
        {
            question: "What is special about rental car deals?",
            answer: "Rental car deals offer competitive prices and flexibility in choosing vehicles.",
            isOpen: false,
        },
        {
            question: "How do I find such low rental car prices?",
            answer: "You can find low rental car prices by comparing rates from different providers and booking in advance.",
            isOpen: false,
        },
        {
            question: "How do I find the car rental deals?",
            answer: "You can find car rental deals on our website by searching for available vehicles and comparing prices.",
            isOpen: false,
        }
    ])

    const toggleFaq = (index) => {
        const newFaqs = [...faqs];
        newFaqs[index].isOpen = !newFaqs[index].isOpen;
        setFaqs(newFaqs);
    }

    return (
        <>
            <div className='pt-20'>
                <div className='text-center'>
                    <h1 className='font-bold text-xl'>FAQ</h1>
                    <h1 className='font-bold text-3xl mt-3'>Frequently Asked Questions</h1>
                    <h1 className='mt-5'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to</h1>
                    <h1>Common Concerns and Inquiries.</h1>
                </div>

                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className='shadow-xl p-4 mr-56 ml-56 mb-10 mt-10'>
                            <div
                                className={`flex w-full justify-between p-4 ${faq.isOpen ? 'open-question' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <p className='font-semibold text-xl'>{faq.question}</p>
                                <p><FontAwesomeIcon icon={faAngleDown} rotation={faq.isOpen ? 180 : 0} /></p>
                            </div>
                            {faq.isOpen && (
                                <div className='p-2'>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faq
