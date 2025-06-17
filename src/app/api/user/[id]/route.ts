import { connectDB } from '@/lib/mongo';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// ✅ GET user by ID
export async function GET(request: Request) {
  await connectDB();

  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        { message: 'Project not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

// ✅ PATCH (update) user
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  try {
    const body = await req.json();
    const { currentPassword, newPassword, ...updates } = body;

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    if (currentPassword || newPassword) {
      if (!currentPassword || !newPassword) {
        return NextResponse.json(
          { message: 'Both current and new passwords required' },
          { status: 400 }
        );
      }

      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return NextResponse.json(
          { message: 'Current password incorrect' },
          { status: 401 }
        );
      }

      const hashed = await bcrypt.hash(newPassword, 10);
      updates.password = hashed;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });
    return NextResponse.json(updatedUser, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'Failed to update user' },
      { status: 500 }
    );
  }
}

// ✅ DELETE user
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  try {
    const deleted = await User.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'User deleted successfully.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
