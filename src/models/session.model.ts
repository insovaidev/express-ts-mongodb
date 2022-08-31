import { UserDocument } from './user.model';
import mongoose from "mongoose";

export interface SessionDocument extends mongoose.Document {
    email: UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createAt: Date;
    upateAt: Date;
  }
  
  const sessionSchema = new mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
      valid: { type: Boolean, default: true },
      userAgent: { type: String}
    },
    {
      timestamps: true,
    }
  );
    
  const SessionModel = mongoose.model("Session", sessionSchema);
  export default SessionModel;
  