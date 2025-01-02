"use client"

import { useEffect, useState } from "react";

export default function Schedule() {
        const [scheduleData, setScheduleData] = useState(undefined);
    
        const getScheduleData = async () => {
            let res = await fetch("http://localhost:3000/api/schedule");
            let data = await res.json();
            setScheduleData(data.data);
        };
    
        useEffect(() => {
            getScheduleData()
        }, []);
    return (
        <section id="schedule" className="pb-20">
            <div className="container mx-auto px-4">
                    <p className="text-gray-600 text-center mb-8">Find the perfect time for your dance journey</p>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-accent text-white">
                                <th className="p-4 text-left">Time</th>
                                <th className="p-4">Monday</th>
                                <th className="p-4">Tuesday</th>
                                <th className="p-4">Wednesday</th>
                                <th className="p-4">Thursday</th>
                                <th className="p-4">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData?.map((row, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-4 font-medium">{row.time}</td>
                                    <td className="p-4">{row.monday}</td>
                                    <td className="p-4">{row.tuesday}</td>
                                    <td className="p-4">{row.wednesday}</td>
                                    <td className="p-4">{row.thursday}</td>
                                    <td className="p-4">{row.friday}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};