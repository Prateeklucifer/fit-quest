import ConnectToDB from "@/DB/ConnectToDB";
import Services from "@/schema/Services";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        ConnectToDB()

        let allEntries = await Services.find({})
        
        if (allEntries.length == 0) {
            await Services.create({
                title:"Personal Training",
                description: "Reach your fitness goals faster with the help of our certified personal trainers. Whether you're new to the gym or looking to take your workouts to the next level, our trainers will create a customized plan that works for you.",
                imageUrl: "/services1.jpg"
            },
            {
                title:"Nutrition Coaching",
                description: "Fuel your fitness journey with expert nutrition advice. Our certified nutrition coaches will guide you in making healthier food choices, tailored to your specific fitness goals, ensuring you stay on track to success.",
                imageUrl: "/services3.jpg"
            },
            {
                title:"State-of-the-Art Equipment",
                description: "Train with the best at Fit Quest! Our gym is equipped with the latest, high-quality machines and equipment to support your strength training, cardio, and flexibility workouts, helping you achieve your fitness goals efficiently.",
                imageUrl: "/services4.jpg"
            },);
      
            let allData = await Classes.find({});
      
            return NextResponse.json({ data: allData });
          } else {
            return NextResponse.json({ data: allEntries });
          }

     } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "something went wrong" })
    }

}
