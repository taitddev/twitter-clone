import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { imageBase64 } = req.body;

    let imageUrl = "";
    if (imageBase64) {
      const imageResponse = await cloudinary.uploader.upload(imageBase64);
      imageUrl = imageResponse.url;
    }

    return res.status(200).json({ imageUrl });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
