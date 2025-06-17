import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const imageUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const { data } = await axios.post<{ data: { display_url: string } }>(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    formData
  );

  return data.data.display_url;
};
