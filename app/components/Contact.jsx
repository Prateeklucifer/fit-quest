"use client"

import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {

    const [name, setName] = useState("");;
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const submitRequest = async () => {
        let data = await fetch(`http://localhost:3000/api/contact`, {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                subject,
                msg,
            }),
        });
        let res = await data.json();

        if (data.status == 200) {
            toast.success("details sended", {
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
            toast.error("something went wrong", {
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
    };

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
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow pt-24">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl text-center mb-8">Contact Us</h1>
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <div className="space-y-8">
                                <h2 className="text-2xl mb-6 font-semibold">Get in Touch</h2>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">

                                        <div>
                                            <h3 className="font-semibold">Phone</h3>
                                            <p className="text-gray-600">+91 8767654512</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">

                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p className="text-gray-600">info@dancelab.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">

                                        <div>
                                            <h3 className="font-semibold">Location</h3>
                                            <p className="text-gray-600">House 34 Sector 1 DDU Nagar Raipur, Chhattisgarh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-2xl mb-6 font-medium">Send us a Message</h2>

                                <form className="space-y-4">
                                    <div>
                                        <input
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value)
                                            }}
                                            className="w-full my-2 ring-1 px-2 py-2 ring-neutral-200 rounded focus:outline-accent"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                            className="w-full my-2 ring-1 px-2 py-2 ring-neutral-200 rounded focus:outline-accent"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            placeholder="Subject"
                                            value={subject}
                                            onChange={(e) => {
                                                setSubject(e.target.value)
                                            }}
                                            className="w-full my-2 ring-1 px-2 py-2 ring-neutral-200 rounded focus:outline-accent"
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            placeholder="Your Message"
                                            value={msg}
                                            onChange={(e) => {
                                                setMsg(e.target.value)
                                            }}
                                            className="min-h-56 w-full my-2 ring-1 px-2 py-2 ring-neutral-200 rounded focus:outline-accent"
                                        />
                                    </div>

                                    <button type="submit" className="w-full bg-accent py-2 rounded text-white font-semibold" onClick={() => {
                                        submitRequest();
                                    }}>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};