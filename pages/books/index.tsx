import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import BookDetails from "../../src/components/BookDetails";
import { useAllBooks, useUserBooks } from "../../src/hooks/books";

const Books: NextPage = () => {
  const router = useRouter();
  const [userId, setUserId] = useState(0);

  const { booksData } = useAllBooks();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken") || "";
    const decodedToken: any = decodeToken(token);
    setUserId(decodedToken.id);
  }, []);

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
