import { NextRequest } from 'next/server';
import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll('file') as File[];

  if (files.length === 0) {
    return new Response(JSON.stringify({ error: 'No files uploaded' }), {
      status: 400,
    });
  }

  const client = new S3Client({
    endpoint: 'https://nyc3.digitaloceanspaces.com',
    region: 'nyc3',
    credentials: {
      accessKeyId: process.env.DO_SPACES_KEY!,
      secretAccessKey: process.env.DO_SPACES_SECRET!,
    },
    forcePathStyle: false,
  });

  try {
    const uploadPromises = files.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadParams = {
        Bucket: 'brandnasu-space',
        Key: `uploads/${Date.now()}-${file.name}`,
        Body: buffer,
        ACL: 'public-read' as const,
        ContentType: file.type,
      };

      const uploader = new Upload({
        client,
        params: uploadParams,
      });

      const result = await uploader.done();
      return result.Location;
    });

    const urls = await Promise.all(uploadPromises);

    return new Response(JSON.stringify({ urls }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Upload failed:', error);
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
    });
  }
}
