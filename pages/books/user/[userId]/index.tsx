import { Button, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import BookDetails from "../../../../src/components/BookDetails";
import { useUserBooks } from "../../../../src/hooks/books";

const Books: NextPage = () => {
  const router = useRouter();

  const { userId }: any = router.query;

  const goToPage = () => {
    router.push("books/add");
  };

  const { booksData } = useUserBooks(userId);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={goToPage}>
          Add a new book
        </Button>
      </div>
      <Typography variant="h4">Books</Typography>
      <Grid
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {booksData.map((book: any) => {
          return <BookDetails key={book.title} {...book} />;
        })}
      </Grid>
    </div>
  );
};

export default Books;
