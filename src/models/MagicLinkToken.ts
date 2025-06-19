import mongoose, { Schema, Document } from 'mongoose';

interface MagicLinkToken extends Document {
  email: string;
  token: string;
  expiresAt: Date;
}

const magicLinkTokenSchema = new Schema<MagicLinkToken>({
  email: { type: String, required: true },
  token: { type: String, required: true, unique: true },
  expiresAt: { type: Date, required: true },
});

export default mongoose.models.MagicLinkToken ||
  mongoose.model<MagicLinkToken>('MagicLinkToken', magicLinkTokenSchema);
