import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { deleteBook } from "../../../pages/api/book-api";
import { GET_BOOKS } from "../../../pages/constants/keys";
import { queryClient } from "../../services/queryClient";
import useStyles from "./styles";

const BookDetails: React.FC<any> = ({ title, author, year, id }) => {
  const router = useRouter();
  const classes = useStyles();

  const handleDelete = async () => {
    await deleteBook(id);
    queryClient.invalidateQueries([GET_BOOKS]);
  };

  const handleEdit = () => {
    router.push(`/books/${id}`);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography style={{ margin: "5px 0px" }}>Author: {author}</Typography>
      <Typography style={{ margin: "5px 0px" }}>Published: {year}</Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
      </div>
    </Box>
  );
};

export default BookDetails;
