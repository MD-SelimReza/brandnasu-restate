import { NextRequest } from 'next/server';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response(JSON.stringify({ error: 'No file uploaded' }), {
      status: 400,
    });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const s3 = new AWS.S3({
    endpoint: new AWS.Endpoint('https://nyc3.digitaloceanspaces.com'),
    accessKeyId: process.env.DO_SPACES_KEY,
    secretAccessKey: process.env.DO_SPACES_SECRET,
    region: 'nyc3',
  });

  const params = {
    Bucket: 'brandnasu-space',
    Key: `uploads/${file.name}`,
    Body: buffer,
    ACL: 'public-read',
    ContentType: file.type,
  };

  try {
    const data = await s3.upload(params).promise();
    return new Response(JSON.stringify({ url: data.Location }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
    });
  }
}
