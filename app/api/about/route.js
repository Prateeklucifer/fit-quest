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
          "At Dance Lab, we’re passionate about providing a place where dance becomes an expression of joy, creativity, and discipline. Our experienced instructors guide students through various dance styles, helping them improve their skills and confidence. Whether you're new to dance or looking to hone your skills, we offer classes for every level, ensuring everyone can find their rhythm.",
        para2:
          "Welcome to Dance Lab, where movement meets passion. We offer a wide range of dance classes, taught by skilled instructors who are dedicated to helping you unlock your full potential. From ballet to hip-hop, our academy is a place where dancers of all ages and skill levels can thrive in a supportive, vibrant community.",
        para3:
          "Dance Lab is a dynamic dance academy dedicated to offering quality dance education. Our passionate and skilled instructors work with students to help them improve technique, express creativity, and build confidence. Whether you’re starting out or looking to advance your skills, Dance Lab provides a welcoming environment for all dancers.",
        para4:
          "At Dance Lab, we believe in the power of dance to bring people together, build self-confidence, and foster creativity. We provide professional dance training in various styles for all ages and skill levels. Join us and be a part of a growing community where every step you take is a step toward growth.",
        para5:
          "At Dance Lab, we offer more than just dance classes – we offer an experience. Whether you are here to learn the basics or challenge your skills, our expert instructors guide you every step of the way. Our academy is a space for dancers to grow, express, and share the joy of movement.",
        para6:
          "Our mission is to inspire individuals through the art of dance, helping them build confidence, creativity, and physical fitness. At Dance Lab, we are committed to providing high-quality dance education in a positive, inclusive, and motivating environment, empowering dancers of all ages to pursue their passion and unlock their potential.",
        para7:
          "At Dance Lab, our mission is to cultivate a love for dance and provide the highest level of training for students of all backgrounds and experience levels. We strive to create a supportive environment where students can develop their skills, gain confidence, and express themselves freely through movement.",
        para8:
          "Our vision is to be a leading dance academy where students are encouraged to pursue their passion for dance, explore new styles, and achieve their goals. We aim to create an inclusive, welcoming space where every dancer feels valued, inspired, and empowered to reach their full potential.",
        para9:
          "To be a beacon of creativity and excellence in the dance community, Dance Lab envisions a future where all dancers feel supported, challenged, and motivated to become the best versions of themselves. We aim to be recognized for fostering talent, nurturing self-expression, and promoting the joy of dance.",
        para10:
          "Our aim is to provide exceptional dance training in a variety of styles while maintaining a focus on technique, artistry, and personal growth. Through our programs, we aim to instill discipline, confidence, and a love for movement in every dancer, helping them to excel in both their dance journey and personal life.",
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
