import ConnectToDB from "@/DB/ConnectToDB";
import Contact from "@/schema/Contact";
import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(req, res) {
  const { name, email, subject, msg } =
    await req.json();

  try {
    ConnectToDB();

    if (validator.isEmail(email)) {
      await Contact.create({
        name: name,
        email: email,
        subject: subject,
        msg: msg,
      });
      return NextResponse.json({ status: 200 });
    } else {
      return NextResponse.json({ message: "invailed format" }, { status: 403 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { messege: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    ConnectToDB();

    let data = await Contact.find({});
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { messege: "something went wrong" },
      { status: 500 }
    );
  }
}
