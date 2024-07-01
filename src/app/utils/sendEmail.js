import nodemailer from "nodemailer";

export const sendEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 808,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for verification",
    text: `Your OTP is: ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

// user: "purohittestemailved@gmail.com",
// pass: "vV@256e60e9f",


// import nodemailer from 'nodemailer'

// const email = "purohittestemailved@gmail.com"
// const password = "vV@256e60e9f"

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass: password,
//   },
// });

// export const mailOptions = {
//   from: email,
//   to: email,
// };