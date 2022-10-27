import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DeleteBookModal from "../DeleteBookModal";
import useStyles from "./styles";

const BookCard: React.FC<any> = ({ title, author, id, photoUrl }) => {
  const router = useRouter();
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleView = () => {
    router.push(`/books/${id}/details`);
  };

  return (
    <Box className={classes.container} onClick={handleView}>
      <div className={classes.imageWrapper}>
        <Image
          width={190}
          height={250}
          className={classes.image}
          src={photoUrl || "/no-image.jpg"}
          alt="/no-image.jpg"
        ></Image>
      </div>
      <Typography className={classes.typography}>{title}</Typography>
      <Typography className={classes.typography} style={{ color: "grey" }}>
        {author}
      </Typography>
      <DeleteBookModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        book={{ title, id }}
      />
    </Box>
  );
};

export default BookCard;
