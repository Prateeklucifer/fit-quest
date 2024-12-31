import ConnectToDB from "@/DB/ConnectToDB";
import Services from "@/schema/Services";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        ConnectToDB()

        let allEntries = await Services.find({})
        if (allEntries.length == 0) {
            await Services.create({
                title: "Dance Classes for All Levels",
                description: "We offer a wide range of dance classes catering to beginners, intermediate, and advanced students. Whether you're just starting your dance journey or refining your skills, our expert instructors provide personalized guidance to help you reach your goals. From ballet to hip-hop, we have something for everyone.",
                imageUrl: "/services1.jpg"
            },{
                title: "Private Dance Lessons",
                description: "For those looking for a more personalized experience, our private dance lessons are designed to focus on individual needs and progress. Whether you want to prepare for a special event, improve your technique, or learn a new style, our one-on-one sessions offer tailored instruction to help you achieve your dancing goals.",
                imageUrl: "/service2.jpg"
            },{
                title: "Kids Dance Programs",
                description: "Our kids' dance programs are designed to introduce children to the joy of movement in a fun and supportive environment. We focus on building confidence, coordination, and creativity through engaging classes in various dance styles, ensuring children develop a love for dance at an early age.",
                imageUrl: "/services3.jpg"
            },{
                title: "Performance Opportunities",
                description: "At Dance Lab, we believe in showcasing the hard work and talent of our students. We provide regular performance opportunities, where dancers can demonstrate their skills and gain valuable stage experience. Whether it's a recital, competition, or community event, our students have the chance to shine in front of an audience.",
                imageUrl: "/services4.jpg"
            },{
                title: "Dance Fitness Classes",
                description: "For those who want to stay active while enjoying the rhythm, our dance fitness classes are the perfect choice. Combining dance moves with fitness routines, these classes provide an energizing and fun way to improve strength, flexibility, and overall fitness. Join us to work out while having a blast!",
                imageUrl: "/services5.jpg"
            },{
                title: "Workshops and Masterclasses",
                description: "Our workshops and masterclasses are designed to help dancers of all levels deepen their knowledge and skills. Taught by industry professionals, these sessions focus on specialized techniques, choreography, and performance skills. Whether you're looking to enhance your dance repertoire or explore new styles, our workshops offer valuable insights and training.",
                imageUrl: "/services6.jpg"
            },)

            let allData = await Services.find({});

            return NextResponse.json({ data: allData });
        } else {
            return NextResponse.json({ data: allEntries });
        }

    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "something went wrong" })
    }

}
