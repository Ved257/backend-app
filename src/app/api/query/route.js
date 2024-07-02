import connectMongoDB from '../../libs/mongodb';
import Query from "../../models/query";
import { NextResponse } from "next/server";
import cors from '../middleware/cors'
   
// export const maxDuration = 60; // This function can run for a maximum of 5 seconds
export const dynamic = 'force-dynamic';
export async function GET(req, res) {

    // await cors(req, res);
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
  