import React from "react";
import useStyles from "./styles";

const BackgroundImage: React.FC<any> = ({ mainPage }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {mainPage && (
        <div className={classes.imageContainer}>
          <img
            src="/StackOfBooks.svg"
            style={{
              height: "1000px",
              width: "1000px",
              objectFit: "cover",
            }}
            alt="/no-image.jpg"
          ></img>
        </div>
      )}
    </div>
  );
};

export default BackgroundImage;
