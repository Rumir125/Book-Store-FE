import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { deleteBook } from "../../../pages/api/book-api";
import { GET_BOOKS } from "../../keys/keys";
import { queryClient } from "../../services/queryClient";
import DeleteBookModal from "../DeleteBookModal";
import useStyles from "./styles";

const BookDetails: React.FC<any> = ({ title, author, year, id, genres }) => {
  const router = useRouter();
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = async () => {
    await deleteBook(id);
    queryClient.invalidateQueries([GET_BOOKS]);
  };

  const handleEdit = () => {
    router.push(`/books/${id}`);
  };

  const genresText = genres.join(", ");

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "128px", height: "128px" }}
          src="/no-image.jpg"
        ></img>
      </div>
      <Typography style={{ margin: "5px 0px" }}>Author: {author}</Typography>
      <Typography style={{ margin: "5px 0px" }}>Published: {year}</Typography>
      {/* <Typography style={{ margin: "5px 0px" }}>Genres:</Typography>
      <List style={{ margin: "5px 0px" }}>
        {genres.map((item: string) => (
          <ListItem style={{ padding: "4px 8px" }}>{item}</ListItem>
        ))}
      </List> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
