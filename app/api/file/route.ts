import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export const POST = async (req: Request) => {
  const fileEnding = headers().get('file-ending') || 'txt';
  const contentType = headers().get('content-type') || 'text/plain';
  const file = await req.text();
  const filename = `${randomUUID()}.${fileEnding}`;

  try {
    const client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    console.log(`Try to upload file ${filename}`);

    await client
      .send(
        new PutObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: filename,
          Body: file,
          ContentType: contentType,
        }),
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return Response.json(null, { status: 500 });
  }
};
