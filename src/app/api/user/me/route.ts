import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import UserModel from '@/models/User';
import { connectDB } from '@/lib/mongo';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  const user = await UserModel.findOne({ email: session.user.email });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ user });
}
