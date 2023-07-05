// Imports
import { S3Client } from "@aws-sdk/client-s3";

// Set the region
const REGION = "us-east-1";
console.log("🚀 ~ file: sampleClient.js:6 ~ REGION:", REGION);

// Create a new S3 client
export const s3Client = new S3Client({
  region: REGION,
  endpoint: "https://s3.us-east-1.amazonaws.com",
});
