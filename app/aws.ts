import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export const uploadFile = async (
  fileEnding: string,
  contentType: string,
  file: ArrayBuffer,
) => {
  const uuid = window.crypto.randomUUID();
  const filename = `${uuid}.${fileEnding}`;
  const client = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    },
  });

  console.log(`Try to upload file ${filename}`);

  return client.send(
    new PutObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      Key: filename,
      Body:  Buffer.from(file),
      ContentType: contentType,
    }),
  );
};
