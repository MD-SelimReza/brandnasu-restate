import { connectDB } from '@/lib/mongo';
import User from '@/models/User';
import { NextResponse } from 'next/server';

// GET all users
export async function GET() {
  await connectDB();

  try {
    const users = await User.find().sort({ createdAt: -1 });
    return NextResponse.json(users, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
