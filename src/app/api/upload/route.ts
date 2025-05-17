import { NextRequest, NextResponse } from 'next/server';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client, BUCKET_NAME, R2_ENDPOINT_DEV } from '@/lib/s3Client';
import FileModel from '@/models/fileModel';
import { connectDB } from '@/lib/mongo';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    // Get form data
    const formData = await req.formData();
    const file = formData.get('files') as File | null;

    if (!file) {
      return NextResponse.json(
        { message: 'No file uploaded' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${BUCKET_NAME}/${Date.now()}-${file.name}`;

    // Upload to Cloudflare R2
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    });

    await s3Client.send(command);

    // Include bucket name in the file URL
    const fileUrl = `${R2_ENDPOINT_DEV}/${fileName}`;

    // Save to DB
    const savedFile = await FileModel.create({
      filename: fileName,
      url: fileUrl,
      bucket: BUCKET_NAME,
    });

    return NextResponse.json(
      { message: 'File uploaded', file: savedFile },
      { status: 201 }
    );
  } catch (error: unknown) {
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { message: 'File upload failed', error: errorMessage },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
