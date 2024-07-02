import connectMongoDB from "../../libs/mongodb";
import Query from "../../models/query";
import { NextResponse } from "next/server";
import  {generateOTP} from "../../utils/otpGenerator"
import { sendEmail } from "../../utils/sendEmail" 
import cors from '../middleware/cors'       

export async function POST(request, response) {

  // await cors(request, response);

  try {
    const { email } = await request.json();
    const otp = generateOTP();

    // Send OTP via email
    await sendEmail(email, otp);

    // Save OTP to a temporary store (e.g., Redis, in-memory store, or a database)
    // For this example, we'll use a simple in-memory store
    global.otpStore = global.otpStore || {};
    global.otpStore[email] = otp;

    console.log(otp);
    return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}



export async function GET() {
  try {
    await connectMongoDB();

    // Find all Query documents
    const queries = await Query.find();

    return NextResponse.json({ queries });
  } catch (error) {
    console.error("Error fetching queries:", error);
    return NextResponse.json({ error: "Failed to fetch queries" }, { status: 500 });
  }
}
