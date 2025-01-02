"use client"

import { useState } from "react"
import { Bounce, ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submitRequest = async () => {
        let data = await fetch(`http://localhost:3000/api/contact`, {
            method: "POST",
            body: JSON.stringify({ firstName, lastName, email, phone, message })
        })
        let res = await data.json()

        if (data.status == 200) {
            toast.success('details submited', {
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
        } else {
            toast.error('something went wrong', {
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
    }

    return (
        // <div className="md:px-4">
        //     <div className="container m-auto">
        //         <div className="name">
        //         </div>
        //     </div>
        // </div>
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
            <div className=" container m-auto flex flex-col lg:px-28 xl:px-72 ">
                <div className="right px-4 py-2 flex flex-col gap-6 lg:py-8 lg:px-12 xl:px-28">
                    <div className="name flex flex-col gap-4 md:flex-row">
                        <div className="firstname md:w-1/2">
                            <label htmlFor="last" className="block mb-2">First Name <span className="text-red-400">*</span></label>
                            <input type="text" name="" id="last" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={firstName} onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />
                        </div>
                        <div className="lastname md:w-1/2">
                            <label htmlFor="name" className="block mb-2">Last Name <span className="text-red-400">*</span></label>
                            <input type="text" name="" id="name" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={lastName} onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                        </div>
                    </div>

                    <div className="email">
                        <label htmlFor="email" className="block mb-2">Email <span className="text-red-400">*</span></label>
                        <input type="email" name="" id="email" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone" className="block mb-2">Phone number</label>
                        <input type="number" name="" id="phone" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }} />
                    </div>
                    <div className="messege">
                        <label htmlFor="msg" className="block mb-2">Message</label>
                        <textarea name="" id="msg" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={message} onChange={(e) => {
                            setMessage(e.target.value)
                        }} ></textarea>
                    </div>

                    <button className="text-white px-4 py-2 rounded-md bg-accent hover:bg-accent/90 w-full" onClick={() => { submitRequest() }}>Lets Talk</button>
                </div>
            </div>
        </>
    )
}