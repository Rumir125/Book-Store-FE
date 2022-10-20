import React, { useEffect } from "react";

import useStyles from "./styles";
import Image from "next/image";

const UploadImage: React.FC<any> = ({
  setValue,
  uploading,
  setUploading,
  imageUrl,
  handleUploadImage,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setValue("photoUrl", imageUrl);
  }, [imageUrl, setValue]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            padding: " 10px",
            border: "1px solid grey",
            borderRadius: "5px",
          }}
        >
          <Image
            width={100}
            height={100}
            src={imageUrl || "/no-image.jpg"}
            alt="/no-image.jpg"
            id="photo"
          />
        </div>
      </div>
      <div className={classes.container}>
        <input
          type="file"
          //   name="photo"
          id="multi"
          onChange={handleUploadImage}
          multiple
          // accept="image/*"
          disabled={uploading}
        />
      </div>
    </div>
  );
};

export default UploadImage;
