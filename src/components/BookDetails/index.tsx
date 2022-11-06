import { Box, Grid, Typography } from "@mui/material";
import purify from "dompurify";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DeleteBookModal from "../DeleteBookModal";
import ActionButton from "../Shared/Button";
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
        <ActionButton
          // variant="outlined"
          onClick={() => router.push(`/books/user/${user.id}`)}
        >
          Back to User Page
        </ActionButton>
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
          <div
            className={classes.typography}
            dangerouslySetInnerHTML={{ __html: purify.sanitize(description) }}
          />
        </Box>
        <div className={classes.footer}>
          {canEditOrEditOrDelete && (
            <>
              <ActionButton
                variant="outlined"
                onClick={() => router.push(`/books/user/${user.id}`)}
              >
                Cancel
              </ActionButton>
              <ActionButton
                variant="contained"
                color="error"
                onClick={handleDelete}
              >
                Delete
              </ActionButton>
              <ActionButton
                variant="contained"
                color="primary"
                onClick={handleEdit}
              >
                Edit
              </ActionButton>
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
