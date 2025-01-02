import ConnectToDB from "@/DB/ConnectToDB";
import About from "@/schema/About";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await About.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await About.create({
        para1:
          "Fit Quest is a modern gym that offers a dynamic and inclusive environment for individuals to reach their fitness goals. Our state-of-the-art facility is designed to support a wide range of fitness levels, from beginners to seasoned athletes. We pride ourselves on creating a supportive community where each member is encouraged to push their limits and achieve their personal best. Whether you're focused on building strength, improving cardiovascular health, or enhancing flexibility, Fit Quest is the perfect place to start your fitness journey.",
        para2:
          "At Fit Quest, we believe in a holistic approach to fitness. Our team of expert trainers, nutritionists, and wellness coaches work together to ensure that our members not only get stronger physically but also feel more confident and empowered mentally. Our goal is to foster a community where members feel supported, motivated, and inspired to reach new heights in their fitness journey. Join us and experience the difference that comes with personalized training and a genuine commitment to your success.",
        para3:
          "Fit Quest is more than just a gym; it's a community where individuals come together to improve their physical and mental well-being. Our facility is equipped with the latest fitness tools and technology, providing a holistic approach to health.",
        para4:
          "Our vision is to be a leading fitness community that fosters growth, strength, and wellness. We aspire to redefine what it means to be fit by offering a diverse range of services that cater to each person’s unique goals. ",
        para5:
          "At Fit Quest, our aim is to provide a dynamic, inclusive space where everyone feels welcome to start or continue their fitness journey. We strive to offer the highest quality training, resources, and support, helping our members set and achieve realistic goals.",
      });

      let allData = await FAQs.find({});

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
