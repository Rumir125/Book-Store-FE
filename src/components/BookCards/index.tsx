import React from "react";

import { Button, Grid } from "@mui/material";
import { useUserBooks } from "../../hooks/useBooks";
import BookCard from "../BookCard";
import useStyles from "./styles";

const BookCards: React.FC<any> = ({ userId }) => {
  const { booksData, fetchNextPage, status, hasNextPage } = useUserBooks(
    userId ? userId : null
  );

  const classes = useStyles();
  return (
    <div>
      {status === "success" && (
        <Grid className={classes.cardsWrapper}>
          {booksData.map((page: any, index: number) => (
            <React.Fragment key={index}>
              {page.map((book: any) => (
                <BookCard key={book.title} {...book} />
              ))}
            </React.Fragment>
          ))}
        </Grid>
      )}
      <div className={classes.fetchMoreWrapper}>
        <Button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          Fetch more
        </Button>
      </div>
    </div>
  );
};

export default BookCards;
