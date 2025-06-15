import { NextRequest } from 'next/server';
import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll('file') as File[];

  if (files.length < 1 || files.length > 5) {
    return new Response(
      JSON.stringify({
        error: 'You must upload at least 1 and no more than 5 images.',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const client = new S3Client({
    endpoint: 'https://nyc3.digitaloceanspaces.com',
    region: 'nyc3',
    credentials: {
      accessKeyId: process.env.DO_SPACES_KEY!,
      secretAccessKey: process.env.DO_SPACES_SECRET!,
    },
  });

  try {
    const uploadPromises = files.map(async (file) => {
      if (!(file instanceof File)) throw new Error('Invalid file input');

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

      await uploader.done();
      // DigitalOcean Spaces doesn't return Location in SDK, build URL manually
      const url = `https://${uploadParams.Bucket}.nyc3.digitaloceanspaces.com/${uploadParams.Key}`;
      return url;
    });

    const uploadedUrls = await Promise.all(uploadPromises);

    return new Response(JSON.stringify({ urls: uploadedUrls }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Upload failed:', error);
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
