import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongo';
import MagicLinkToken from '@/models/MagicLinkToken';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  await connectDB();
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ message: 'Token is required' }, { status: 400 });
  }

  const record = await MagicLinkToken.findOne({ token });
  if (!record) {
    return NextResponse.json(
      { message: 'Invalid or expired token' },
      { status: 400 }
    );
  }

  if (new Date() > record.expiresAt) {
    await MagicLinkToken.deleteOne({ token });
    return NextResponse.json({ message: 'Token has expired' }, { status: 410 });
  }

  const user = await User.findOne({ email: record.email });
  await MagicLinkToken.deleteOne({ token });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({
    message: 'Verified',
    email: user.email,
    password: user.password, // You shouldn't return raw password!
  });
}
