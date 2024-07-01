import connectMongoDB from "../../libs/mongodb";
import Contact from "../../models/contact";
import { NextResponse } from "next/server";
       // Assuming you have a sendEmail.js file

export async function POST(request) {
  try {
    const {userName, email, number, designation, organization,} = await request.json();
    await connectMongoDB();
    await Contact.create({
      userName, email, number, designation, organization
    })

    return NextResponse.json({ message: "Contact saved successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "Failed to save contact" }, { status: 500 });
  }
}
