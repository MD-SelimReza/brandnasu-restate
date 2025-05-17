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
    const { title, description, image, slug, tag } = body;

    if (!title || !description || !image || !slug || !tag || tag.length === 0) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const existing = await Project.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { message: 'Project with this title already exists.' },
        { status: 409 }
      );
    }

    const newProject = await Project.create({
      title,
      description,
      image,
      slug,
      tag,
    });
    return NextResponse.json(newProject, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
