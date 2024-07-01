import mongoose from "mongoose";
import { Schema } from "mongoose";


const contactSchema = new Schema(
    {
        userName: String,
        email: String,
        number: String,
        designation: String,
        organization: String,
    },
    {
      timestamps: true,
    }
  );
  
  const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
  
  export default Contact;