// Imports
import { S3Client } from "@aws-sdk/client-s3";

// Set the region
const REGION = "us-east-1";

// Create a new S3 client
const s3Client = new S3Client({ region: REGION });
