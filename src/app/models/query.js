import mongoose from "mongoose";
import { Schema } from "mongoose";


const queySchema = new Schema(
    {
        userName: String,
        email: String,
        number: String,
        designation: String,
        organization: String,
        city: String,
        location: String,
        workspaceType: String,
        minSqft: Number,
        maxSqft: Number,
        rentType: String,
    },
    {
      timestamps: true,
    }
  );
  
  const Query = mongoose.models.Query || mongoose.model("Query", queySchema);
  
  export default Query;