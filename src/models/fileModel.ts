import mongoose, { Schema, Document } from "mongoose";

export interface IFile extends Document {
  filename: string;
  url: string;
  createdAt: Date;
}

const FileSchema = new Schema<IFile>({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.File || mongoose.model<IFile>("File", FileSchema);
