import ConnectToDB from "@/DB/ConnectToDB";
import Classes from "@/schema/Classes";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        ConnectToDB()

        let allEntries = await Classes.find({})
        
        if (allEntries.length == 0) {
            await Classes.create({
                title:"Beginner Ballet",
                timing: "10:00 AM to 11:30 AM (Mon-Wed)",
                imageUrl: "/BeginnerBallet.jpg"
            },
            {
                title:"Hip-Hop Dance",
                timing: "5:00 PM to 6:30 PM (Tue-Thu)",
                imageUrl: "/Hip-HopDance.jpg"
            },
            {
                title:"Contemporary Dance",
                timing: "7:00 PM to 8:30 PM (Mon-Fri)",
                imageUrl: "/ContemporaryDance.webp"
            },
            {
                title:"Jazz Funk",
                timing: "6:00 PM to 7:30 PM (Wed-Sat)",
                imageUrl: "/JazzFunk.jpg"
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
