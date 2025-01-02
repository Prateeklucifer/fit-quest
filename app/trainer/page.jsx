import React from 'react'
import Mentors from '../components/mentors'

export default function page() {
  return (
    <>
     <div className="about-heading min-h-[30vh] bg-neutral-800 text-white px-4 flex flex-col justify-center items-center relative py-12 mb-8">
                <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-20">
                </div>
                <div className="heading font-bold text-2xl text-center md:text-3xl z-20">
                    Our Trainers 
                </div>
                <div className="para text-center mt-3 md:text-lg z-20 lg:w-[50%]">
                At Fit Quest, our trainers are the heart of your fitness journey. With years of experience and a deep passion for helping others, our expert trainers, nutritionists, and wellness coaches are committed to guiding you toward your goals.
                </div>
            </div>
      <Mentors />
    </>
  )
}
