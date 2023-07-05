import {
  CreateBucketCommand,
  DeleteBucketCommand,
  HeadBucketCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();

// New client
import { s3Client } from "./libs/sampleClient.js";

// Parameters for the S3 bucket
const params = {
  BUCKET_NAME: "fhfucsdjk",
  KEY: "newobject",
  BODY: {
    token: "123xf",
  },
};
const accountId = process.env.ACCOUNT_ID;

const firstS3Func = async () => {
  let bucketExists = false;
  try {
    // Check if the bucket exists
    const bucketExistsCommand = new HeadBucketCommand({
      Bucket: params.BUCKET_NAME,
      ExpectedBucketOwner: accountId,
    });

    const response = await s3Client.send(bucketExistsCommand);
    bucketExists = response.$metadata.httpStatusCode;
  } catch (error) {
    console.log("🚀 ~ file: sample.js:34 ~ firstS3Func ~ error:", error);
  }

  try {
    // If bucket exists, delete it
    if (bucketExists === 200) {
      const deleteBucket = new DeleteBucketCommand({
        Bucket: params.BUCKET_NAME,
        ExpectedBucketOwner: accountId,
      });
      const response = await s3Client.send(deleteBucket);
    }
  } catch (error) {
    console.log("🚀 ~ file: sample.js:45 ~ firstS3Func ~ error:", error);
  }

  // Create a new bucket
  try {
    const createdBucket = new CreateBucketCommand({
      Bucket: params.BUCKET_NAME,
    });

    const response = await s3Client.send(createdBucket);
  } catch (error) {
    console.log("🚀 ~ file: sample.js:25 ~ firstS3Func ~ error:", error);
  }

  // Create a new object and upload it
  try {
    const createdObject = new PutObjectCommand({
      Bucket: params.BUCKET_NAME,
      Key: params.KEY,
      Body: JSON.stringify(params.BODY),
    });

    const response = await s3Client.send(createdObject);
  } catch (error) {
    console.log("🚀 ~ file: sample.js:50 ~ firstS3Func ~ error:", error);
  }
};
await firstS3Func();
