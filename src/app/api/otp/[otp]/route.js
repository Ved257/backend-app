import connectMongoDB from '../../../libs/mongodb'
import Query from "../../../models/query";
import { NextResponse } from "next/server";
import cors from '../../middleware/cors'

export async function POST(request, {params}) {
  await cors(request);
    const {otp} = params
    try {
      const {
        userName, email, number, designation, organization, city, location, workspaceType, minSqft, maxSqft, rentType, 
      } = await request.json();
  
      // Validate OTP
      if (global.otpStore[email] !== otp) {
        return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
      }
  
      // OTP is valid, proceed to save the query
      await connectMongoDB();
      await Query.create({
        userName, email, number, designation, organization, city, location, workspaceType, minSqft, maxSqft, rentType,
      });
  
      // Clear the OTP from the store
      delete global.otpStore[email];
  
      return NextResponse.json({ message: "Query saved successfully" }, { status: 201 });
    } catch (error) {
      console.error("Error saving query:", error);
      return NextResponse.json({ error: "Failed to save query" }, { status: 500 });
    }
  }