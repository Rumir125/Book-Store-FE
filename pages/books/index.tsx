import { Button } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { BACKEND_BASE_URL } from "../constants/endpoints";

const Books: NextPage = () => {
  const [books, setBooks] = useState<any>([]);
  const router = useRouter();

  const goToPage = () => {
    router.push("books/add");
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/books`)
      .then((response) => setBooks(response.data));
  }, []);

  return (
    <div>
      <Button variant="outlined" onClick={() => router.push("/")}>
        Back to Home Page
      </Button>
      <div>Here are the books</div>
      <div>
        {books.map((book: any) => {
          return (
            <div key={book.title}>
              <p>{book.title}</p>
              <ul>
                <li>{book.author}</li>
                <li>{book.year}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <Button variant="contained" onClick={goToPage}>
        Add a new book
      </Button>
    </div>
  );
};

export default Books;
