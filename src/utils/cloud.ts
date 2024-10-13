import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME as string;
const CLOUDINARY_NAME_API_KEY = process.env.CLOUDINARY_NAME_API_KEY as string;
const CLOUDINARY_NAME_API_SECRET = process.env
  .CLOUDINARY_NAME_API_SECRET as string;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_NAME_API_KEY,
  api_secret: CLOUDINARY_NAME_API_SECRET,
});

export async function uploadToCloud(filePath: string) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    console.log(result.url, "cloud url");
    fs.unlinkSync(filePath);
    return result.url;
  } catch (error) {
    fs.unlinkSync(filePath);
    return null;
  }
}
