import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dyjiw06pe/upload";

export const useUploadImage = ({ setValue, photoUrl }: any) => {
  const [uploading, setUploading] = useState(false);
  const [formState, setFormState] = useState(new FormData());
  const [imageUrl, setImageUrl] = useState(photoUrl);

  const completeUpload = async () => {
    if (imageUrl === photoUrl) {
      return imageUrl;
    }
    setUploading(true);
    try {
      const res = await axios.post(`${CLOUDINARY_URL}`, formState);
      setValue("photoUrl", res.data.url);
      setUploading(false);
      toast.success("You have successfully uploaded an image", {
        position: toast.POSITION.BOTTOM_CENTER,
      });

      return res.data.url;
    } catch (e) {
      setUploading(false);
    }
    return "";
  };

  function readFileAsDataURL(file: any) {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = () => reject(fileReader);
      fileReader.readAsDataURL(file);
    });
  }

  /* Additional Utility Function */
  const loadImage = (url: string) =>
    new Promise((resolve, reject) => {
      const img: any = document.getElementById("photo");
      img.addEventListener("load", () => resolve(img));
      img.addEventListener("error", (err: any) => reject(err));
      setImageUrl(url);
    });

  const handleUploadImage = async (e: any) => {
    const files = Array.from(e.target.files);

    const formData = new FormData();

    files.forEach((file: any, i) => {
      formData.append("file", file);
    });

    formData.append("upload_preset", "my-uploads");
    setFormState(formData);

    if (!files.length) return;
    let b64str: any = await readFileAsDataURL(files[0]);
    let _IMG: any = await loadImage(b64str);
  };

  return {
    uploading,
    setUploading,
    handleUploadImage,
    completeUpload,
    imageUrl,
  };
};
