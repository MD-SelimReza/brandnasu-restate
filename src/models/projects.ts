import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  slug: string;
  tag: string[];
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tag: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

export const Project =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
