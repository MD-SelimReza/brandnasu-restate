import { connectDB } from '@/lib/mongo';
import { Project } from '@/models/projects';
import { NextRequest, NextResponse } from 'next/server';

// ✅ GET project by ID
export async function GET(request: Request) {
  await connectDB();

  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: 'Project not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// ✅ PATCH (update) project
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  try {
    const body = await req.json();
    const { title, description, image, slug, tag, content } = body;

    if (
      !title ||
      !description ||
      !image ||
      !slug ||
      !tag ||
      tag.length === 0 ||
      !content
    ) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const updated = await Project.findByIdAndUpdate(
      id,
      { title, description, image, slug, tag, content },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { message: 'Project not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(updated, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// ✅ DELETE project
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  try {
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: 'Project not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Project deleted successfully.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
