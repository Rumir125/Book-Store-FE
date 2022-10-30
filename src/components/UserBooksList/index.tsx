import React from "react";

import { Button, Grid, Typography } from "@mui/material";
import { useUserBooks } from "../../hooks/useBooks";
import BookCard from "../BookCard";
import { useRouter } from "next/router";
import { useUsers } from "../../hooks/useUsers";
import useStyles from "./styles";
import ActionButton from "../Shared/Button";

const UserBooksList: React.FC<any> = () => {
  const router = useRouter();
  const classes = useStyles();

  const { userId }: any = router.query;
  const { booksData } = useUserBooks(userId);
  const { userData } = useUsers();

  const user = userData.find((item: any) => item.id === userId);

  return (
    <div>
      <div className={classes.container}>
        <Typography variant="h4">Books ({user?.username}) </Typography>
      </div>
      <ActionButton onClick={() => router.push("/books/add")}>
        Add a new book
      </ActionButton>
      <Grid container className={classes.cardsWrapper}>
        {booksData.map((book: any) => {
          return <BookCard key={book.title} {...book} />;
        })}
      </Grid>
    </div>
  );
};

export default UserBooksList;
