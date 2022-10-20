import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import BookCard from "../../src/components/BookCard";
import { useAllBooks } from "../../src/hooks/books";

const Books: NextPage = () => {
  const { booksData } = useAllBooks();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Typography variant="h4">Books</Typography>
      </div>
      <Grid
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {booksData.map((book: any) => {
          return <BookCard key={book.title} {...book} />;
        })}
      </Grid>
    </div>
  );
};

export default Books;
