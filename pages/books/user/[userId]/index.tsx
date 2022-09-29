import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import BookDetails from "../../../../src/components/BookDetails";
import { useUserBooks } from "../../../../src/hooks/books";

const Books: NextPage = () => {
  const router = useRouter();

  const { userId }: any = router.query;
  const { booksData } = useUserBooks(userId);

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
          return <BookDetails key={book.title} {...book} />;
        })}
      </Grid>
    </div>
  );
};

export default Books;
