"use client"

import { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { Bounce, ToastContainer, toast } from 'react-toastify';


export default function ServicesAdminPage() {

  const [services, setServices] = useState([])
  const [render, setRender] = useState(false)

  const getAllServices = async () => {
    let res = await fetch('http://localhost:3000/api/services')
    let data = await res.json()
    setServices(data.data)
  }

  const addFeild = async () => {
    let data = await fetch('http://localhost:3000/api/admin/services', {
      method: "POST",
    })

    if (data.status == 200) {
      sucessMsg("feild added sucessfully")
      setRender(!render)
    } else {
      errorMsg("can not add feild")
    }

  }

  const removeFeild = async (id) => {
    let data = await fetch('http://localhost:3000/api/admin/services', {
      method: "DELETE",
      body: JSON.stringify({ id })
    })

    if (data.status == 200) {
      sucessMsg("feild deleted sucessfully")
      setRender(!render)
    } else {
      errorMsg("can not delete feild")
    }

  }

  const updateTitle = (event, id) => {
    let data = [...services]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].title = event.target.value
      setServices(data)
    }

  }
  const updateImageUrl = (event, id) => {
    let data = [...services]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].imageUrl = event.target.value
      setServices(data)
    }

  }
  const updateDescription = (event, id) => {
    let data = [...services]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].description = event.target.value
      setServices(data)
    }

  }

  const updateRecords = async () => {
    let data = await fetch("http://localhost:3000/api/admin/services", {
      method: "PUT",
      body: JSON.stringify({ AllRecords: services })
    })

    if (data.status == 200) {
      sucessMsg("Data updated sucessfully")
    } else {
      errorMsg("can not update data")
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
    getAllServices()
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

      <div className="md:mx-4">
        <div className="container m-auto px-4 md:px-0">
          <div className="heading text-3xl font-semibold text-center my-4">Services</div>
          <div className="faqs flex flex-col gap-6">
            {services?.map((item, index) => (
              <details className="group border-b-[1px] py-4 border-zinc-300 w-full cursor-pointer" key={index} open>
                <summary className="text-zinc-900 flex items-center justify-between gap-2">
                  <div className="left font-semibold text-xl">{item.title}</div>
                  <div className="right flex items-center gap-4">
                    <button className="text-red-600"><MdDelete size={20} onClick={() => { removeFeild(item._id) }} /></button>
                    <div className="group-open:rotate-180 flex gap-2"><HiOutlineChevronDown size={26} /> </div>
                  </div>
                </summary>
                <div className="faq flex flex-col my-2">
                  <label htmlFor={`title${index}`}>
                    <div className="py-2 flex items-center justify-between">Title </div>
                    <input type="text" name={`title${index}`} id={`title${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.title} onChange={(e) => {
                      updateTitle(e, item._id)
                    }} />
                  </label>
                  <label htmlFor={`description${index}`}>
                    <div className="block py-2">Description</div>
                    <input type="text" name={`description${index}`} id={`description${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.description} onChange={(e) => {
                      updateDescription(e, item._id)
                    }} />
                  </label>
                  <label htmlFor={`imageUrl${index}`}>
                    <div className="block py-2">Image URL</div>
                    <input type="text" name={`imageUrl${index}`} id={`imageUrl${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.imageUrl} onChange={(e) => {
                      updateImageUrl(e, item._id)
                    }} />
                  </label>
                </div>
              </details>

            ))}

          </div>
          <div className="buttons my-4 flex flex-col gap-4">
            <button className="outline-dashed outline-1 py-1 rounded-sm outline-zinc-400 flex items-center justify-center text-sm" onClick={() => {
              addFeild()
            }}> <span><IoIosAdd size={26} /></span>Add Column</button>
            <button className="bg-accent text-white py-[2px] px-4 rounded-md w-fit self-end" onClick={() => { updateRecords() }}>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}
