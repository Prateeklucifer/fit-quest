import React from 'react'

export default function Footer() {
    return (
        <div className="bg-gray-50">
            <div className="container m-auto">
                <div className="px-4 flex flex-col items-center gap-8 lg:flex-row py-6 justify-between">
                    <div className="left flex flex-col items-center justify-center lg:flex-row gap-8">
                        <h3 className="heading"><a className="logo font-semibold text-xl md:text-2xl text-zinc-700" href="/">Dance<span
                            className="text-accent">Lab</span></a></h3>
                        <div className="copy"> © 2024 dancelab </div>
                    </div>
                    <ul className="text-sm lg:text-base flex flex-wrap  items-center justify-center gap-4">
                        <li><a className="text-zinc-600 hover:text-zinc-900" href="/">Home</a></li>
                        <li><a className="text-zinc-600 hover:text-zinc-900" href="/services">Services</a></li>
                        <li><a className="text-zinc-600 hover:text-zinc-900" href="/about">About Us</a></li>
                        <li><a className="text-zinc-600 hover:text-zinc-900" href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
