import { connectDB } from '@/lib/mongo';
import { Project } from '@/models/projects';
import { NextResponse } from 'next/server';

interface Params {
  params: { id: string };
}

// ✅ GET project by ID
export async function GET(req: Request, { params }: Params) {
  await connectDB();

  try {
    const project = await Project.findById(params.id);

    if (!project) {
      return NextResponse.json(
        { message: 'Project not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// ✅ DELETE project
export async function DELETE(req: Request, { params }: Params) {
  await connectDB();

  try {
    const deleted = await Project.findByIdAndDelete(params.id);
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
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json(
      { message: 'Failed to delete project' },
      { status: 500 }
    );
  }
}

// ✅ PATCH (update) project
export async function PATCH(req: Request, { params }: Params) {
  await connectDB();

  try {
    const body = await req.json();
    const { title, description, image, slug, tag } = body;

    if (!title || !description || !image || !slug || !tag || tag.length === 0) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const updated = await Project.findByIdAndUpdate(
      params.id,
      { title, description, image, slug, tag },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { message: 'Project not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error('PATCH Error:', error);
    return NextResponse.json(
      { message: 'Failed to update project' },
      { status: 500 }
    );
  }
}
