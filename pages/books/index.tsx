import { Button } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import BookDetails from "../../src/components/BookDetails";
import { useBooks } from "../../src/hooks/books";

const Books: NextPage = () => {
  const router = useRouter();

  const goToPage = () => {
    router.push("books/add");
  };

  const { booksData } = useBooks();

  console.log(booksData);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={() => router.push("/")}>
          Back to Home Page
        </Button>
        <Button variant="contained" onClick={goToPage}>
          Add a new book
        </Button>
      </div>
      <div>Here are the books</div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        {booksData.map((book: any) => {
          return <BookDetails key={book.title} {...book} />;
        })}
      </div>
    </div>
  );
};

export default Books;
