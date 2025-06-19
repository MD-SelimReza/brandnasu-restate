import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongo';
import User from '@/models/User';
import MagicLinkToken from '@/models/MagicLinkToken';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  await connectDB();
  const { first_name, last_name, email, password } = await req.json();

  if (!first_name || !last_name || !email || !password) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json(
      { message: 'User already exists' },
      { status: 409 }
    );
  }

  // TODO: hash password with bcrypt!
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    role: 'admin',
  });

  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60);

  await MagicLinkToken.create({ email: user.email, token, expiresAt });

  const loginLink = `${process.env.NEXT_PUBLIC_APP_URL}/magic-login?token=${token}`;
  return NextResponse.json({ loginLink }, { status: 201 });
}
