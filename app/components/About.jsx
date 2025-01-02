"use client"

import React, { useEffect, useState } from "react";

export default function About() {
    const [About, setAbout] = useState(undefined);

    const getAbout = async () => {
        let res = await fetch("http://localhost:3000/api/about");
        let data = await res.json();
        setAbout(data.data);
    };

    useEffect(() => {
        getAbout();
    }, []);
    return (
        <>
            <section className="px-4 container m-auto" id="about">
            
                <div className="lg:flex">
                    <div className="lg:w-1/2 lg:pr-6 xl:pr-14 xl:w-[60%] flex flex-col justify-center text-black">
                        <p className="mb-4">
                            {About&&About[0].para1}
                        </p>
                        <p className="mb-4">
                            {About&&About[0].para2}
                        </p>
                        <div className="text-lg font-semibold text-accent">Our mission</div>
                        <p className="mb-4">
                            {About&&About[0].para3}
                        </p>
                        <div className="text-lg font-semibold text-accent">Our Vision</div>
                        <p className="mb-4">
                            {About&&About[0].para4}
                        </p>
                        <div className="text-lg font-semibold text-accent">Our Goal</div>
                        <p className="mb-4">
                            {About&&About[0].para5}
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-center items-center lg:w-1/2 xl:w-[40%] lg:px-4 h-full">
                        <img
                            src="/about.jpg"
                            alt=""
                            className="rounded-xl lg:h-[514px] w-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
