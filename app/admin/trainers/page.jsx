"use client"

import { useState, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminFeatures() {

    const [mentors, setMentors] = useState([])

    const getMentors = async () => {
        let res = await fetch('http://localhost:3000/api/mentors')
        let data = await res.json()
        setMentors(data.data)
    }

    const updateName = (event, index) => {
        let newData = [...mentors]
        newData[index].name = event.target.value
        setMentors(newData)
    }

    const updateImageURL = (event, index) => {
        let newData = [...mentors]
        newData[index].imageURL = event.target.value
        setMentors(newData)
    }

    const updateData = async () => {
        let res = await fetch('http://localhost:3000/api/admin/mentors', {
            method: "PUT",
            body: JSON.stringify({ AllRecords: mentors })
        })

        if (res.status == 200) {
            sucessMsg("updated sucessfully")
        } else {
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
        getMentors()
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
            <div className="w-full">
                <div className="container m-auto px-4 md:px-0 ">
                    <div className="heading text-3xl font-semibold text-center my-4">All Trainers</div>
                    <div className="faqs flex flex-col gap-6">
                        {mentors?.map((item, index) => (
                            <div className="faq flex flex-col" key={index}>
                                <label htmlFor="name">
                                    <div className="block py-2">Title</div>
                                    <input type="text" name="name" id="name" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.name} onChange={(e) => {
                                        updateName(e, index)
                                    }} />
                                </label>
                                <label htmlFor="url">
                                    <div className="block py-2">image url</div>
                                    <input type="text" name="url" id="url" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.imageURL} onChange={(e) => {
                                        updateImageURL(e, index)
                                    }} />
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="buttons my-4 flex items-center justify-end">
                        <button className="bg-accent text-white py-[2px] px-4 rounded-md w-fit" onClick={() => {
                            updateData()
                        }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}