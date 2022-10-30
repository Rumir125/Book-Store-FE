import { Box, Button, Grid, Typography } from "@mui/material";
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
    <Grid container className={classes.container}>
      <Grid item md={6} xs={12}>
        <Button
          // variant="outlined"
          onClick={() => router.push(`/books/user/${user.id}`)}
        >
          Back to User Page
        </Button>
        <div className={classes.imageWrapper}>
          <Image
            width={300}
            height={500}
            className={classes.image}
            src={photoUrl || "/no-image.jpg"}
            alt="/no-image.jpg"
          ></Image>
        </div>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <Typography className={classes.typography}>
            Posted by: {user?.username}
          </Typography>
          <Typography className={classes.typography}>
            Author: {author}
          </Typography>
          <Typography className={classes.typography}>
            Published: {year}
          </Typography>
          <Typography>Genres: {genresText}</Typography>
          <Typography className={classes.typography}>
            Description: {description}
          </Typography>
        </Box>
        <div className={classes.footer}>
          {canEditOrEditOrDelete && (
            <>
              <Button
                variant="outlined"
                onClick={() => router.push(`/books/user/${user.id}`)}
              >
                Cancel
              </Button>
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit
              </Button>
            </>
          )}
        </div>
      </Grid>
      <DeleteBookModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        book={{ title, id }}
      />
    </Grid>
  );
};

export default BookDetails;
