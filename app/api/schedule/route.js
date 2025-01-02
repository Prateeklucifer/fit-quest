import ConnectToDB from "@/DB/ConnectToDB";
import Schedule from "@/schema/Schedule";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Schedule.find({});
    console.log("allEntries")

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await Schedule.create(
        {
          time: "7:00 AM",
          monday: "Yoga Basics",
          tuesday: "Cardio Blast",
          wednesday: "Strength Training",
          thursday: "HIIT",
          friday: "Pilates",
        },
        {
          time: "9:00 AM",
          monday: "Strength and Core",
          tuesday: "Spin Class",
          wednesday: "Yoga Advanced",
          thursday: "Functional Training",
          friday: "Cardio Basics",
        },
        {
          time: "6:00 PM",
          monday: "HIIT",
          tuesday: "CrossFit",
          wednesday: "Cardio and Core",
          thursday: "Boxing Fitness",
          friday: "Stretch and Recovery",
        }
      );

      let allData = await Schedule.find({});

      return NextResponse.json({ data: allData });
    } else {
      return NextResponse.json({ data: allEntries });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
