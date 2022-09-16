import { Button } from "@mui/material";
import React from "react";
import { deleteBook } from "../../pages/api/hello";
import { GET_BOOKS } from "../../pages/constants/keys";
import { queryClient } from "../services/queryClient";

const BookDetails: React.FC<any> = ({ title, author, year, user, id }) => {
  console.log(user);

  const handleDelete = async () => {
    await deleteBook(id);
    queryClient.invalidateQueries([GET_BOOKS]);
  };

  return (
    <div>
      <p>{title}</p>
      <ul>
        <li>{author}</li>
        <li>{year}</li>
        {/* <li>{user}</li> */}
      </ul>
      <Button variant="contained" color="error" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default BookDetails;
