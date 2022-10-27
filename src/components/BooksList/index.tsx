import React from "react";

import { Grid, Typography } from "@mui/material";
import { useAllBooks } from "../../hooks/useBooks";
import SearchField from "../SearchField";
import BookCard from "../BookCard";
import useStyles from "./styles";

const BooksList: React.FC<any> = ({ title }) => {
  const { booksData } = useAllBooks();

  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Typography variant="h4">{title}</Typography>
      </div>
      <div style={{ margin: "20px 0px" }}>
        <SearchField />
      </div>
      <Grid className={classes.cardsWrapper}>
        {booksData.map((book: any) => {
          return <BookCard key={book.title} {...book} />;
        })}
      </Grid>
    </div>
  );
};

export default BooksList;
