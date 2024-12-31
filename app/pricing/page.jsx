"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PricingPage() {

    const router = useRouter()
    const [pricing, setPricing] = useState(undefined)

    const getAllPricing = async () => {
        let res = await fetch('http://localhost:3000/api/pricing')
        let data = await res.json()
        setPricing(data.data)
    }

    useEffect(() => {
        getAllPricing()
    }, [])
    return (
        <div className="mt-6 container m-auto">
            <h3 className="font-bold text-xl lg:text-2xl text-center my-5 md:my-11">
                Our Pricing
            </h3>
            <div className="pricing-sec px-4 mt-14 flex flex-col gap-8 md:px-28 lg:flex-row ">
                {pricing && pricing.map((item, index) => (
                    <div className="box p-4 ring-1 ring-accent rounded-md w-full" key={index}>
                        <div className="heading font-semibold text-lg">{item.title}</div>
                        <div className="para  py-2">{item.description}</div>
                        <div className="pricing flex items-end  py-2"><span className="text-3xl font-bold">₹{item.price}</span>/month</div>
                        <button className="py-2 my-4 bg-accent text-white font-semibold w-full  rounded-md" onClick={() => {
                            router.push('/checkout')
                        }}>Buy plan</button>
                        <div className="benifits flex gap-4 flex-col">
                            <div className="benifit flex items-center gap-4 "><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg></span>{item.benifit1}</div>
                            <div className="benifit flex items-center gap-4 "><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg></span>{item.benifit2}</div>
                            <div className="benifit flex items-center gap-4 "><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg></span> {item.benifit3}</div>
                            <div className="benifit flex items-center gap-4 "><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg></span>{item.benifit4}</div>
                        </div>
                    </div>
                )) 
                }
            </div>
        </div>
    )
}