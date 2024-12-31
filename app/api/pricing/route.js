import ConnectToDB from "@/DB/ConnectToDB";
import Pricing from "@/schema/Pricing";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Pricing.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await Pricing.create(
        {
          title: "Beginner Package",
          description: "Perfect for enthusiastic newcomers starting their exciting dance journey.",
          price: "2,000",
          benifit1: "Access to beginner-level classes",
          benifit2: "Flexible class timings",
          benifit3: "Supportive learning environment",
          benifit4: "Progress tracking",
        },
        {
          title: "Intermediate Package",
          description: "Ideal for those refining their skills and exploring new styles.",
          price: "3,500",
          benifit1: "Access to intermediate-level classes",
          benifit2: "Personalized instructor feedback",
          benifit3: "Performance opportunities",
          benifit4: "Skill development workshops",
        },
        {
          title: "Pro Package",
          description: "Designed for advanced dancers aiming for mastery and performance excellence.",
          price: "6,000",
          benifit1: "Unlimited access to all classes",
          benifit2: "Private coaching sessions",
          benifit3: "Exclusive performance events",
          benifit4: "Advanced choreography training",
        }
      );

      let allData = await Pricing.find({});

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
