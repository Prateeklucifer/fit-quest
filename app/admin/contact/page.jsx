"use client"

import { useState, useEffect } from "react"
import { MdDelete } from "react-icons/md";
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminContact() {
  const [contact, setContact] = useState([])
  const [render, setRender] = useState(false)

  const getAllContact = async () => {
    let res = await fetch('http://localhost:3000/api/admin/contact')
    let data = await res.json()
    setContact(data.data)
  }

  const deleteItem = async (index) => {
    let newData = [...contact]
    // newData.splice(index, 1)

    let data = await fetch('http://localhost:3000/api/admin/contact', {
      method: "DELETE",
      body: JSON.stringify({ id: newData[index]._id })
    })

    if (data.status == 200) {
      sucessMsg("feild deleted sucessfully")
      setRender(!render)
    } else {
      errorMsg("can not delete feild")
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
    getAllContact()
  }, [render])
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
      <div className="md:px-4">
        <div className="container m-auto my-2 px-4 md:px-0">
          <div className="heading font-semibold text-3xl text-center mb-8">All Enquiries</div>
          <div className="data my-4 flex flex-col gap-4">
            {contact.length >= 0 && contact.map((item, index) => (
              <div className="box flex flex-col ring-2 py-2 px-2 sm:px-4 md:py-4 ring-gray-800 rounded-lg" key={index}>
                <div className="top flex flex-col mb-4">
                  <div className="localty text-xl font-semibold flex items-center justify-between">Name: {item.firstName} {item.lastName} <button className="text-red-400" onClick={() => { deleteItem(index) }}><MdDelete size={25} /></button></div>
                </div>
                <div className="mid flex flex-col"><div className="name">Email: <span className="font-bold">{item.email}</span></div> <div className="age">Phone Number: {item.phone}</div> </div>
                <div className="bottom mt-2 flex flex-col gap-1">
                  <div className="available-blood ">Message: <span className="font-bold">{item.message}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}