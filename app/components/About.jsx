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
                <h3 className="font-bold text-xl lg:text-2xl text-center my-5 md:my-11 font-Montserrat">
                    About name
                </h3>
                <div className="lg:flex">
                    <div className="lg:w-1/2 lg:pr-6 xl:pr-14 xl:w-[60%] flex flex-col justify-center space-y-4 text-black">
                        <p>
                            {About&&About[0].para1}
                        </p>
                        <p>
                            {About&&About[0].para2}
                        </p>
                        <p>
                            {About&&About[0].para3}
                        </p>
                        <p>
                            {About&&About[0].para4}
                        </p>
                        <p>
                            {About&&About[0].para5}
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-center items-center lg:w-1/2 xl:w-[40%] lg:px-4 h-full">
                        <img
                            src="/about.jpg"
                            alt=""
                            className="rounded-xl lg:h-[514px] w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            <section className="px-4 container m-auto" id="about">
                <h3 className="font-bold text-xl lg:text-2xl text-center my-5 md:my-11 font-Montserrat">
                    Our Mission, Vision, Aim
                </h3>
                <div className="lg:flex flex-row-reverse">
                    <div className="lg:w-1/2 lg:pr-6 xl:pl-14 xl:w-[60%] flex flex-col justify-center space-y-4 text-black">
                        <p>
                            {About&&About[0].para6}
                        </p>
                        <p>
                            {About&&About[0].para7}
                        </p>
                        <p>
                            {About&&About[0].para8}
                        </p>
                        <p>
                            {About&&About[0].para9}
                        </p>
                        <p>
                            {About&&About[0].para10}
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-center items-center lg:w-1/2 xl:w-[40%] lg:px-4 h-full">
                        <img
                            src="/about2.jpg"
                            alt=""
                            className="rounded-xl lg:h-[514px] w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
