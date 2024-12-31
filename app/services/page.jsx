"use client"

import React, { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState(undefined);

  const getServices = async () => {
    let res = await fetch("http://localhost:3000/api/services");
    let data = await res.json();
    setServices(data.data);
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <main>
      <section className="px-4 container m-auto">
        <h3 className="font-bold text-xl lg:text-2xl text-center my-5 md:my-11 font-Montserrat">
          Our Services
        </h3>


        <div className="grid grid-cols-1 md:grid-cols-2 mt-9 gap-x-5 gap-y-20 xl:grid-cols-3 my-6">
          {services?.map((item, index) => (
            <div className="" key={index}>
              <img
                src={item.imageUrl}
                alt={item.imageUrl}
                className="w-full h-[256px] lg:h-[412px] object-cover rounded-[4px]"
              />
              <div className="mt-4">
                <h4 className="text-xl font-bold text-center font-Montserrat">
                  {item.title}
                </h4>
                <p className="text-center mt-2 text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
