"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import React from 'react'

export default function Mentors() {
    const [mentors, setMentors] = useState(undefined);
    const getMentors = async () => {
        let res = await fetch("http://localhost:3000/api/mentors");
        let data = await res.json();
        setMentors(data.data);
    };

    useEffect(() => {
        getMentors();
    }, []);

    return (
        <div className="md:px-4 mb-16">
            <div className="container m-auto px-4 md:px-0">
                <h3 className="font-bold text-xl lg:text-2xl my-5 md:mt-11 font-Montserrat">
                    Meet Our Expert Trainer
                </h3>
                <div className="para text-lg  md:w-[70%] lg:w-[60%] xl:w-[50%]">Our team of experienced and passionate trainers at Fit Quest are dedicated to helping you achieve your fitness aspirations. With years of expertise in various training techniques, nutrition, and wellness, our trainers provide personalized guidance to ensure you stay on track and motivated. Whether you need one-on-one sessions, expert advice, or group support, our trainer are here to help you unlock your full potential and make lasting transformations.</div>
                <div className="mentors  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
                    {mentors && (
                        mentors.map((item, index) => (
                            <div className="mentor flex flex-col justify-center items-center w-full" key={index}>
                                <Image
                                    src={`${item.imageURL}`}
                                    alt={`${item.imageURL}`}
                                    height={200}
                                    width={200}
                                    className="h-[400px] w-full object-cover object-top rounded"
                                />
                                <div className="name mt-2 text-center ">
                                    {item.name}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    )
}