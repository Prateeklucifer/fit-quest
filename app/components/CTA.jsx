import Link from 'next/link'
import React from 'react'

export default function CTA() {
    return (
        <section className="container m-auto px-4 text-center py-20 relative md:rounded overflow-hidden my-20 md:px-9 lg:px-20">
            <div className="absolute top-0 left-0 w-full h-full bg-black/[48%] -z-10"></div>
            <img
                src="/CTA.jpg"
                alt="CTA.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover -z-20"
            />
            <h3 className="text-xl font-bold mb-2 lg:mb-4 text-white font-Montserrat md:text-2xl lg:text-3xl">
                Take the First Step Towards Your Dance Journey
            </h3>
            <p className="mb-8 text-white md:text-lg lg:text-xl">
                Begin your dance journey today! Our expert instructors are here to guide you every step of the way.
            </p>
            <Link href={"/contact"} className="bg-accent px-3 py-2 text-white font-semibold rounded md:text-lg lg:text-xl">
            Join Now
            </Link>
        </section>
    )
}
