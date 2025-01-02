"use client"

import { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { Bounce, ToastContainer, toast } from 'react-toastify';


export default function ServicesAdminPage() {

  const [schedules, setSchedules] = useState([])
  const [render, setRender] = useState(false)

  const getAllSchedules = async () => {
    let res = await fetch('http://localhost:3000/api/schedule')
    let data = await res.json()
    setSchedules(data.data)
  }

  const addFeild = async () => {
    let data = await fetch('http://localhost:3000/api/admin/schedule', {
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
    let data = await fetch('http://localhost:3000/api/admin/schedule', {
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

  const updateTime = (event, id) => {
    let data = [...schedules]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].time = event.target.value
      setSchedules(data)
    }

  }
  const updateMonday = (event, id) => {
    let data = [...schedules]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].monday = event.target.value
      setSchedules(data)
    }

  }
  const updateTuesday = (event, id) => {
    let data = [...schedules]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].tuesday = event.target.value
      setSchedules(data)
    }

  }
  const updateWednesday = (event, id) => {
    let data = [...schedules]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].wednesday = event.target.value
      setSchedules(data)
    }

  }
  const updateThursday = (event, id) => {
    let data = [...schedules]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].thursday = event.target.value
      setSchedules(data)
    }

  }
  const updateFriday = (event, id) => {
    let data = [...schedules]

    let donorIndex = data.findIndex((item) => item._id == id)
    if (donorIndex != -1) {
      data[donorIndex].friday = event.target.value
      setSchedules(data)
    }

  }

  const updateRecords = async () => {
    let data = await fetch("http://localhost:3000/api/admin/schedule", {
      method: "PUT",
      body: JSON.stringify({ AllRecords: schedules })
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
    getAllSchedules()
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
          <div className="heading text-3xl font-semibold text-center my-4">Schedules</div>
          <div className="faqs flex flex-col gap-6">
            {schedules?.map((item, index) => (
              <details className="group border-b-[1px] py-4 border-zinc-300 w-full cursor-pointer" key={index} open>
                <summary className="text-zinc-900 flex items-center justify-between gap-2">
                  <div className="left font-semibold text-xl">{item.time}</div>
                  <div className="right flex items-center gap-4">
                    <button className="text-red-600"><MdDelete size={20} onClick={() => { removeFeild(item._id) }} /></button>
                    <div className="group-open:rotate-180 flex gap-2"><HiOutlineChevronDown size={26} /> </div>
                  </div>
                </summary>
                <div className="faq flex flex-col my-2">
                  <label htmlFor={`time${index}`}>
                    <div className="py-2 flex items-center justify-between">time </div>
                    <input type="text" name={`time${index}`} id={`time${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.time} onChange={(e) => {
                      updateTime(e, item._id)
                    }} />
                  </label>
                  <label htmlFor={`monday${index}`}>
                    <div className="block py-2">monday</div>
                    <input type="text" name={`monday${index}`} id={`monday${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.monday} onChange={(e) => {
                      updateMonday(e, item._id)
                    }} />
                  </label>
                  <label htmlFor={`tuesday${index}`}>
                    <div className="block py-2">tuesday</div>
                    <input type="text" name={`tuesday${index}`} id={`tuesday${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.tuesday} onChange={(e) => {
                      updateTuesday(e, item._id)
                    }} />
                  </label>
                  <label htmlFor={`wednesday${index}`}>
                    <div className="block py-2">wednesday</div>
                    <input type="text" name={`wednesday${index}`} id={`mwednesday{index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.wednesday} onChange={(e) => {
                      updateWednesday(e, item._id)
                    }} />
                  </label>
                  <label htmlFor={`thursday${index}`}>
                    <div className="block py-2">thursday</div>
                    <input type="text" name={`thursday${index}`} id={`thursday${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.thursday} onChange={(e) => {
                      updateThursday(e, item._id)
                    }} />
                  </label>
                  <label htmlFor={`friday${index}`}>
                    <div className="block py-2">friday</div>
                    <input type="text" name={`friday${index}`} id={`friday${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.friday} onChange={(e) => {
                      updateFriday(e, item._id)
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
