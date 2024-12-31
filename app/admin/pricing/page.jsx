"use client"

import { useState, useEffect } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminFeatures() {

    const [pricing, setPricing] = useState([])

    const getPricing = async () => {
        let res = await fetch('http://localhost:3000/api/pricing')
        let data = await res.json()
        setPricing(data.data)
    }

    const updateTitle = (event, index) => {
        let newData = [...pricing]
        newData[index].title = event.target.value
        setPricing(newData)
    }

    const updateDescription = (event, index) => {
        let newData = [...pricing]
        newData[index].description = event.target.value
        setPricing(newData)
    }

    const updatePrice = (event, index) => {
        let newData = [...pricing]
        newData[index].price = event.target.value
        setPricing(newData)
    }

    const updateBenifit1 = (event, index) => {
        let newData = [...pricing]
        newData[index].benifit1 = event.target.value
        setPricing(newData)
    }

    const updateBenifit2 = (event, index) => {
        let newData = [...pricing]
        newData[index].benifit2 = event.target.value
        setPricing(newData)
    }

    const updateBenifit3 = (event, index) => {
        let newData = [...pricing]
        newData[index].benifit3 = event.target.value
        setPricing(newData)
    }

    const updateBenifit4 = (event, index) => {
        let newData = [...pricing]
        newData[index].benifit4 = event.target.value
        setPricing(newData)
    }

    const updateData = async () => {
        let res = await fetch('http://localhost:3000/api/admin/pricing', {
            method: "POST",
            body: JSON.stringify({ AllPricing: pricing })
        })
        
        if(res.status == 200){
            sucessMsg("data updated sucessfully")
        }else{
            errorMsg("something went wrong")
        }

    }

    const sucessMsg = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const errorMsg = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    useEffect(() => {
        getPricing()
    }, [])

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
            <div className="md:mx-4">
                <div className="container m-auto px-4 md:px-0">
                <div className="heading text-3xl font-semibold text-center my-4">Pricing</div>
                    <div className="faqs flex flex-col gap-6">
                        {pricing?.map((item, index) => (
                            <details className="group border-b-[1px] py-4 border-zinc-300 w-full cursor-pointer" key={index} open>
                                <summary className="text-zinc-900 flex items-center justify-between gap-2">
                                    <div className="left font-semibold text-xl">{item.title}</div>
                                    <div className="right flex items-center gap-4">
                                        <div className="group-open:rotate-180 flex gap-2"><HiOutlineChevronDown size={26} /> </div>
                                    </div>
                                </summary>
                                <div className="faq flex flex-col my-2">
                                    <label htmlFor="name">
                                        <div className="py-2 flex items-center justify-between">Title </div>
                                        <input type="text" name="name" id="name" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.title} onChange={(e) => {
                                            updateTitle(e, index)
                                        }} />
                                    </label>
                                    <label htmlFor="description">
                                        <div className="block py-2">description</div>
                                        <input type="text" name="description" id="description" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.description} onChange={(e) => {
                                            updateDescription(e, index)
                                        }} />
                                    </label>
                                    <label htmlFor="price">
                                        <div className="block py-2">price</div>
                                        <input type="text" name="price" id="price" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.price} onChange={(e) => {
                                            updatePrice(e, index)
                                        }} />
                                    </label>
                                    <label htmlFor="benifit1">
                                        <div className="block py-2">benifit1</div>
                                        <input type="text" name="benifit1" id="benifit1" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.benifit1} onChange={(e) => {
                                            updateBenifit1(e, index)
                                        }} />
                                    </label>
                                    <label htmlFor="benifit2">
                                        <div className="block py-2">benifit2</div>
                                        <input type="text" name="benifit2" id="benifit2" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.benifit2} onChange={(e) => {
                                            updateBenifit2(e, index)
                                        }} />
                                    </label>
                                    <label htmlFor="benifit3">
                                        <div className="block py-2">benifit3</div>
                                        <input type="text" name="benifit3" id="benifit3" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.benifit3} onChange={(e) => {
                                            updateBenifit3(e, index)
                                        }} />
                                    </label>
                                    <label htmlFor="benifit4">
                                        <div className="block py-2">benifit4</div>
                                        <input type="text" name="benifit4" id="benifit4" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.benifit4} onChange={(e) => {
                                            updateBenifit4(e, index)
                                        }} />
                                    </label>
                                </div>
                            </details>

                        ))}

                    </div>
                    <div className="buttons my-4 flex flex-col gap-4">
                        <button className="bg-accent text-white py-[2px] px-4 rounded-md w-fit self-end" onClick={() => { updateData() }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
