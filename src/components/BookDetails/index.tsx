import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DeleteBookModal from "../DeleteBookModal";
import useStyles from "./styles";

const BookDetails: React.FC<any> = ({
  title,
  author,
  year,
  id,
  genres,
  description,
  photoUrl,
  user,
}) => {
  const router = useRouter();
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = () => {
    router.push(`/books/${id}`);
  };

  const handleDelete = () => {
    setModalOpen(true);
  };

  const userId = useSelector((state: any) => state.user.userId);
  const canEditOrEditOrDelete = userId === user?.id;

  const genresText = genres?.length ? genres.join(", ") : "";

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <div className={classes.imageWrapper}>
        <Image
          width={128}
          height={128}
          className={classes.image}
          src={photoUrl || "/no-image.jpg"}
          alt="/no-image.jpg"
        ></Image>
      </div>
      <Typography className={classes.typography}>
        Posted by: {user?.username}
      </Typography>
      <Typography className={classes.typography}>Author: {author}</Typography>
      <Typography className={classes.typography}>Published: {year}</Typography>
      <Typography>Genres: {genresText}</Typography>
      <Typography className={classes.typography}>
        Description: {description}
      </Typography>
      {
        <div className={classes.footer}>
          <Button
            variant="outlined"
            onClick={() => router.push(`/books/user/${user.id}`)}
          >
            Cancel
          </Button>
          {canEditOrEditOrDelete && (
            <>
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit
              </Button>
            </>
          )}
        </div>
      }
      <DeleteBookModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        book={{ title, id }}
      />
    </Box>
  );
};

export default BookDetails;
