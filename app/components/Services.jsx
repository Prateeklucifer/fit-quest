"use client"

import React, { useEffect, useState } from 'react'

export default function Classes() {

      const [classes, setClasses] = useState(undefined);

      const getClasses = async () => {
        let res = await fetch("http://localhost:3000/api/services");
        let data = await res.json();
        setClasses(data.data);
      };
    
      useEffect(() => {
        getClasses();
      }, []);
    
    return (
        <section className="container m-auto px-4">

            <div className="grid grid-cols-1 py-6 md:py-0 md:grid-cols-2 gap-x-4 gap-y-9 lg:grid-cols-3">
                {classes?.map((item, index) => (
                    <div className="" key={index}>
                        <img
                            src={item.imageUrl}
                            alt={item.imageUrl}
                            className="object-cover w-full h-60 md:h-60 xl:h-80 rounded"
                        />
                        <h4 className="font-bold mt-2 text-lg">{item.title}</h4>
                        <p className="text-secondary -mt-1 text-neutral-500">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
