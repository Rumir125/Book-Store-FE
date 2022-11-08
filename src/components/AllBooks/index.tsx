import React from "react";

import { Typography } from "@mui/material";
import { useUserBooks } from "../../hooks/useBooks";
import SearchField from "../SearchField";
import useStyles from "./styles";
import BookCards from "../BookCards";

const AllBooks: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Typography variant="h4">Books</Typography>
      </div>
      <div style={{ margin: "20px 0px" }}>
        <SearchField />
      </div>
      <BookCards />
    </div>
  );
};

export default AllBooks;
