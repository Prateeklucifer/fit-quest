import React from 'react'
import Classes from '../components/Services'

export default function page() {
    return (
        <>
            <div className="about-heading min-h-[30vh] bg-neutral-800 text-white px-4 flex flex-col justify-center items-center relative py-12 mb-8">
                <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-20">
                </div>
                <div className="heading font-bold text-2xl text-center md:text-3xl z-20">
                    Our Services
                </div>
                <div className="para text-center mt-3 md:text-lg z-20">
                    At Fit Quest, we offer a wide range of services designed to help you achieve your fitness goals.
                </div>
            </div>
            <Classes />
        </>
    )
}
