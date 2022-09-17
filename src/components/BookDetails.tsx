import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { deleteBook } from "../../pages/api/hello";
import { GET_BOOKS } from "../../pages/constants/keys";
import { queryClient } from "../services/queryClient";

const BookDetails: React.FC<any> = ({ title, author, year, user, id }) => {
  const handleDelete = async () => {
    await deleteBook(id);
    queryClient.invalidateQueries([GET_BOOKS]);
  };

  return (
    <Box
      style={{
        margin: "20px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px 20px",
        boxShadow: "5px 5px #888888",
      }}
    >
      <Typography
        style={{
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        variant="h4"
      >
        {title}
      </Typography>
      <ul>
        <li>{author}</li>
        <li>{year}</li>
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Box>
  );
};

export default BookDetails;
