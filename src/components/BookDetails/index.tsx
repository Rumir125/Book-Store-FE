import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DeleteBookModal from "../DeleteBookModal";
import useStyles from "./styles";

const BookDetails: React.FC<any> = ({ title, author, year, id, genres }) => {
  const router = useRouter();
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = () => {
    router.push(`/books/${id}`);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <div className={classes.imageWrapper}>
        <Image
          className={classes.image}
          src="/no-image.jpg"
          alt="/no-image.jpg"
        ></Image>
      </div>
      <Typography className={classes.typography}>Author: {author}</Typography>
      <Typography className={classes.typography}>Published: {year}</Typography>
      <div className={classes.footer}>
        <Button
          variant="contained"
          color="error"
          onClick={() => setModalOpen(true)}
        >
          Delete
        </Button>
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
      </div>
      <DeleteBookModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        book={{ title, id }}
      />
    </Box>
  );
};

export default BookDetails;
