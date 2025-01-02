import React from 'react'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <div className="about-heading min-h-[30vh] bg-neutral-800 text-white px-4 flex flex-col justify-center items-center relative py-12 mb-8">
        <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-20">
        </div>
        <div className="heading font-bold text-2xl text-center md:text-3xl z-20">
          Contact Us
        </div>
        <div className="para text-center mt-3 md:text-lg z-20 lg:w-[50%]">
          We’d love to hear from you! Whether you have questions about our services, need help with your fitness journey, or want to learn more about what we offer, our team is here to assist you.
        </div>
      </div>
      <Contact />
    </>
  )
}
