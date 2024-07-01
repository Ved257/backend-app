import { generateOTP } from '../../utils/otpGenerator';  // Assuming you have an otpGenerator.js file
import { sendEmail } from "../../utils/sendEmail";        // Assuming you have a sendEmail.js file

export async function POST(request) {
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
