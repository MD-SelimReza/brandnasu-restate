import { connectDB } from '@/lib/mongo';
import { Project } from '@/models/projects';
import { NextResponse } from 'next/server';

// GET all projects
export async function GET() {
  await connectDB();

  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST a new project
export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();
    const { title, description, image, slug, tag, content } = body;

    if (!title || !description || !image || !slug || !tag?.length || !content) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const newProject = await Project.create({
      title,
      description,
      image,
      slug,
      tag,
      content,
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
