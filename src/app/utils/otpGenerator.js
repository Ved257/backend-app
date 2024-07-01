// utils/otpGenerator.js
import otpGenerator from "otp-generator";

export const generateOTP = () => {
  const OTP = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false,
  });
  return OTP;
};

// export function generateOTP() {
//   // Your OTP generation logic
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }